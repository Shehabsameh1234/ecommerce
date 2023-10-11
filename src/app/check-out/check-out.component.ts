import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CheckOutService } from '../check-out.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent {
  cartId!: string
  constructor(private _CheckOutService: CheckOutService, private _ActivatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.cartId = this._ActivatedRoute.snapshot.params['id']
    localStorage.setItem("currentPage", `/chekout/${this.cartId}`)
  }
  chekOutForm: FormGroup = new FormGroup({
    details: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^1[0125][0-9]{8}$/)]),
    city: new FormControl(null, [Validators.required]),
  })
  paySubmit(cartId: string, chekOutForm: FormGroup) {
    this._CheckOutService.pay(cartId, chekOutForm.value).subscribe({
      next: (res) => {
        window.location.href = res.session.url
        localStorage.setItem("currentPage", "/home")
      }
    })
  }
}
