import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {gsap, TimelineMax} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactForm: FormGroup;
  TL = new TimelineMax({paused: true });


  constructor(private myForm: FormBuilder) { }

  ngOnInit(): void {


    this.createAnim();


    gsap.utils.toArray('h1').forEach( (elem) => {

      ScrollTrigger.create({
        trigger: 'h1',
        start: 'top 0%',
        onEnter: () => {
          gsap.to('body', {backgroundColor: '#ffeecf', duration: 2});
          gsap.to('h1', {color: '#1f2833', duration: 1.5});
          gsap.to('h2', {color: '#1f2833', duration: 1.5});
          gsap.to('p', {color: '#1f2833', duration: 1.5});
          gsap.to('h3', {color: '#1f2833', duration: 1.5});
        },
        onLeaveBack: () => {
          gsap.to('body', {backgroundColor: '#1f2833', duration: 2});
          gsap.to('h1', {color: '#ffeecf', duration: 1.5}); // #ffeecf
          gsap.to('h2', {color: '#ffeecf', duration: 1.5});
          gsap.to('p', {color: '#ffeecf', duration: 1.5});
          gsap.to('h3', {color: '#ffeecf', duration: 1.5});
        },
        markers: false,

      });
    });


    this.contactForm = this.myForm.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      number: ['', Validators.required],
      message: ['', Validators.required]
    });

  }

  onSubmit() {
    console.log(this.contactForm);
  }

  createAnim() {
    const titre = document.querySelectorAll('.anime');
    this.TL.from(titre[0], 5, {y: -100, opacity: 0});
    this.TL.play();
  }



}
