import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div class="row">
        <h2>Home Page!</h2>
      </div>  
    </div>
  `,
  styles: [
    `
      .container {
        margin-top: 20px; 
      }
      h2 {
        color: darkorange;
      }
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
