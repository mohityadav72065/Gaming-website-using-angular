import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  imports: [],
  templateUrl: './address.html',
  styleUrls: ['./address.css']
})

export class AddressComponent {

  constructor(private router: Router) {}

  saveAndContinue() {

    this.validateStreet();

    this.validateParish();

    this.validateEmail();

    this.validateTrn();

    this.validateIdType();

    this.validateIdNumber();

    this.validateExpiry();

  }

  goBack() {

    this.router.navigate(['/personal']);

  }

  validateStreet() {

    const street =
    document.getElementById('street') as HTMLInputElement;

    const streetError =
    document.getElementById('streetError') as HTMLElement;

    if(street.value.trim() === '') {

      street.style.border =
      '2px solid red';

      streetError.style.display =
      'block';

    }

    else {

      street.style.border =
      '2px solid #ccc';

      streetError.style.display =
      'none';

    }

  }

  validateParish() {

    const parish =
    document.getElementById('parish') as HTMLSelectElement;

    const parishError =
    document.getElementById('parishError') as HTMLElement;

    if(parish.value === 'Select') {

      parish.style.border =
      '2px solid red';

      parishError.style.display =
      'block';

    }

    else {

      parish.style.border =
      '2px solid #ccc';

      parishError.style.display =
      'none';

    }

  }

  validateEmail() {

    const email =
    document.getElementById('email') as HTMLInputElement;

    const emailError =
    document.getElementById('emailError') as HTMLElement;

    if(email.value.trim() === '') {

      email.style.border =
      '2px solid red';

      emailError.style.display =
      'block';

    }

    else {

      email.style.border =
      '2px solid #ccc';

      emailError.style.display =
      'none';

    }

  }

  validateTrn() {

    const trn =
    document.getElementById('trn') as HTMLInputElement;

    const trnError =
    document.getElementById('trnError') as HTMLElement;

    if(trn.value.trim() === '') {

      trn.style.border =
      '2px solid red';

      trnError.style.display =
      'block';

    }

    else {

      trn.style.border =
      '2px solid #ccc';

      trnError.style.display =
      'none';

    }

  }

  validateIdType() {

    const idType =
    document.getElementById('idType') as HTMLSelectElement;

    const idTypeError =
    document.getElementById('idTypeError') as HTMLElement;

    if(idType.value === 'Select') {

      idType.style.border =
      '2px solid red';

      idTypeError.style.display =
      'block';

    }

    else {

      idType.style.border =
      '2px solid #ccc';

      idTypeError.style.display =
      'none';

    }

  }

  validateIdNumber() {

    const idNumber =
    document.getElementById('idNumber') as HTMLInputElement;

    const idNumberError =
    document.getElementById('idNumberError') as HTMLElement;

    if(idNumber.value.trim() === '') {

      idNumber.style.border =
      '2px solid red';

      idNumberError.style.display =
      'block';

    }

    else {

      idNumber.style.border =
      '2px solid #ccc';

      idNumberError.style.display =
      'none';

    }

  }

  validateExpiry() {

    const expiry =
    document.getElementById('expiry') as HTMLInputElement;

    const expiryError =
    document.getElementById('expiryError') as HTMLElement;

    if(expiry.value.trim() === '') {

      expiry.style.border =
      '2px solid red';

      expiryError.style.display =
      'block';

    }

    else {

      expiry.style.border =
      '2px solid #ccc';

      expiryError.style.display =
      'none';

    }

  }

}