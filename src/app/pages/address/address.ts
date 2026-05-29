import { Component } from '@angular/core';

import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './address.html',
  styleUrls: ['./address.css']
})

export class AddressComponent {

  constructor(private router: Router) {}

  goBack() {

    this.router.navigate(['/personal']);

  }

  saveAndContinue() {

    alert('Next Registration Step');

  }

}