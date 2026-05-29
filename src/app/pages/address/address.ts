import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  imports: [],
  templateUrl: './address.html',
  styleUrls: ['./address.css']
})

export class  AddressComponent {

  constructor(private router: Router) {}

  saveAndContinue() {

    const street =
    document.getElementById('street') as HTMLInputElement;

    const parish =
    document.getElementById('parish') as HTMLSelectElement;

    const email =
    document.getElementById('email') as HTMLInputElement;

    const trn =
    document.getElementById('trn') as HTMLInputElement;

    const idType =
    document.getElementById('idType') as HTMLSelectElement;

    const idNumber =
    document.getElementById('idNumber') as HTMLInputElement;

    const expiry =
    document.getElementById('expiry') as HTMLInputElement;

    if(street.value.trim() === '') {

      street.style.border =
      '2px solid red';

    }

    if(parish.value === 'Select') {

      parish.style.border =
      '2px solid red';

    }

    if(email.value.trim() === '') {

      email.style.border =
      '2px solid red';

    }

    if(trn.value.trim() === '') {

      trn.style.border =
      '2px solid red';

    }

    if(idType.value === 'Select') {

      idType.style.border =
      '2px solid red';

    }

    if(idNumber.value.trim() === '') {

      idNumber.style.border =
      '2px solid red';

    }

    if(expiry.value.trim() === '') {

      expiry.style.border =
      '2px solid red';

    }

    else {

      alert('Next Registration Step');

    }

  }

  goBack() {

    this.router.navigate(['/personal']);

  }

}