import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.html',
  styleUrl: './register.css',
})

export class Register {

  sendCode() {

    const mobile =
    document.getElementById("mobile") as HTMLInputElement;

    const mobileError =
    document.getElementById("mobileError") as HTMLElement;

    if(mobile.value.trim() === ""){

      mobile.style.border =
      "2px solid red";

      mobileError.style.display =
      "block";

    }

    else{

      mobile.style.border =
      "2px solid #ccc";

      mobileError.style.display =
      "none";

      window.location.href =
      "/verify";

    }

  }

  checkMobile() {

    const mobile =
    document.getElementById("mobile") as HTMLInputElement;

    const mobileError =
    document.getElementById("mobileError") as HTMLElement;

    if(mobile.value.trim() === ""){

      mobile.style.border =
      "2px solid red";

      mobileError.style.display =
      "block";

    }

    else{

      mobile.style.border =
      "2px solid #ccc";

      mobileError.style.display =
      "none";

    }

  }

  onlyNumbers(event: any) {

    event.target.value =
    event.target.value.replace(/[^0-9]/g, "");

  }

}