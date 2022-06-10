import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  constructor() { }

  newsletterForm = new FormGroup({
    emailNewsletterInput: new FormControl('votre email')
  });

  ngOnInit(): void {

    // this.showForm();
  }


  // showForm() {
  //   console.log(this.newsletterForm);
  // }

  display() {
    const display = document.getElementById('info1');
    const displayed = document.getElementById('info2');

    display.style.display = 'block';
    displayed.style.display = 'none';
  }

  display2() {
    const display = document.getElementById('info3');
    const displayed = document.getElementById('info4');

    display.style.display = 'block';
    displayed.style.display = 'none';
  }

}
