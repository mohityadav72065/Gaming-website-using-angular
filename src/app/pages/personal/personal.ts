import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-personal',
  imports: [],
  templateUrl: './personal.html',
  styleUrls: ['./personal.css']
})

export class Personal {

  constructor(private router: Router) {}

  saveAndContinue() {

    this.router.navigate(['/address']);

  }

  goBack() {

    this.router.navigate(['/terms']);

  }

}