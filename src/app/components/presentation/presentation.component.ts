import { Component, OnInit } from '@angular/core';
import {gsap, TimelineMax} from 'gsap';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';





gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

    TL = new TimelineMax({paused: true });

  constructor() { }

  ngOnInit(): void {

    
    this.createAnim();

  
    gsap.utils.toArray('h1').forEach( (elem) => {

      ScrollTrigger.create({
        trigger: 'h1',
        start: 'top 0%',
        onEnter: () => {
          gsap.to('body', {backgroundColor: '#D8DAD3', duration: 2});
          gsap.to('h1', {color: '#1f2833', duration: 1.5});
          gsap.to('h2', {color: '#1f2833', duration: 1.5});
          gsap.to('p', {color: '#1f2833', duration: 1.5});
        },
        onLeaveBack: () => {
          gsap.to('body', {backgroundColor: '#1f2833', duration: 2});
          gsap.to('h1', {color: '#ffeecf', duration: 1.5}); // #ffeecf
          gsap.to('h2', {color: '#ffeecf', duration: 1.5});
          gsap.to('p', {color: '#ffeecf', duration: 1.5});
        },
        markers: false,
        
      });
    });



  }


  

  // tslint:disable-next-line:typedef
  createAnim() {
    const titre = document.querySelectorAll('.anime');
    this.TL.from(titre[0], 5, {y: -100, opacity: 0});
    this.TL.play();
  }

  


}
