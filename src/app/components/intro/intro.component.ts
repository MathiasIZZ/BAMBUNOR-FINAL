import { Component, OnInit } from '@angular/core';
import { gsap, TimelineMax, TweenMax, Elastic } from 'gsap';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);



@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  TL = new TimelineMax({paused: true});


  constructor() { }

  ngOnInit(): void {

    setTimeout( () => {
      this.chargementSpinner();
      }, 5000
    );

    setTimeout( () => {
      this.createAnim();
      this.anim1();
    }, 5000);

    gsap.utils.toArray('h1').forEach( (elem) => {

      ScrollTrigger.create({
        trigger: 'h1',
        start: 'top 3%',
        onEnter: () => {
          gsap.to('body', {backgroundColor: '#ffffff'});
          gsap.to('h1', {color: '#1f2833'});
          gsap.to('h2', {color: '#1f2833'});
          gsap.to('p', {color: '#1f2833'});

        },
        onLeaveBack: () => {
          gsap.to('body', {backgroundColor: '#1f2833'});
          gsap.to('h1', {color: '#ffffff'}); // #ffeecf
          gsap.to('h2', {color: '#ffffff'});
          gsap.to('p', {color: '#ffffff'});

        },
        markers: false
      });

    });


















  }


  chargementSpinner() {
    const loader = document.querySelector('.loader-container');

      loader.classList.add('fondu-out');

  }

  // chargementSpinner() {
  //     const loader = document.querySelector('.loader');
  //
  //     window.addEventListener('load', () => {
  //         loader.classList.add('fondu-out');
  //     });
  //   }



  createAnim() {
    const titre = document.querySelectorAll('h2');
    this.TL.from(titre[0], 1, {y: -100, opacity: 0}).from(titre[1], 2, {y: -100, opacity: 0});
    this.TL.play();
  }

  anim1() {
    gsap.to('.monBouton2', {
      duration: 3,
      scale: 1,
      y: 25,
      ease: 'elastic(15, 0.3)'
    });


  }




}
