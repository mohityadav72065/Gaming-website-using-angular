import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify',
  imports: [],
  templateUrl: './verify.html',
  styleUrl: './verify.css'
})

export class Verify{

  constructor(private router: Router) {}

  resendCode() {

    alert('Verification code resent successfully');

  }

  verifyCode() {

    const code =
    document.getElementById('code') as HTMLInputElement;

    if(code.value.trim() === '') {

      code.style.border =
      '2px solid red';

      alert('Please fill this field to continue');

    }

    else if(code.value !== '180901') {

      code.style.border =
      '2px solid red';

      alert('Invalid Verification Code');

    }

    else {

      code.style.border =
      '2px solid #ccc';

      alert('Verification Successful');

      this.router.navigate(['/terms']);

    }

  }

  clearCode() {

    const code =
    document.getElementById('code') as HTMLInputElement;

    code.value = '';

    code.style.border =
    '2px solid #ccc';

  }

}