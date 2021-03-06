import { Component, OnInit } from '@angular/core';
import {TimelineMax, gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-cueillette',
  templateUrl: './cueillette.component.html',
  styleUrls: ['./cueillette.component.scss']
})
export class CueilletteComponent implements OnInit {

  TL = new TimelineMax({paused: true});
  constructor() { }

  ngOnInit(): void {
    this.createAnim();

    gsap.utils.toArray('.backbambou').forEach( (elem) => {

      ScrollTrigger.create({
        trigger: 'h1',
        start: 'top 10%',
        onEnter: () => {
          gsap.to('body', {backgroundColor: '#ffeecf'});
          gsap.to('h1', {color: '#121112'});
          gsap.to('h2', {color: '#121112'});
          gsap.to('h4', {color: '#121112'});
          gsap.to('p', {color: '#121112'});
        },
        onLeaveBack: () => {
          gsap.to('body', {backgroundColor: '#121112'});
          gsap.to('h1', {color: '#ffeecf'});
          gsap.to('h2', {color: '#ffeecf'});
          gsap.to('h4', {color: '#ffeecf'});
          gsap.to('p', {color: '#ffeecf'});
        },
        markers: false
      });

    });
  }



  createAnim() {
    const left = document.getElementById('left');
    const right = document.getElementById('right');
    this.TL.from(left, 2, {y: -100, opacity: 0}).from(right, 2, {y: 100, opacity: 0});
    this.TL.play();
  }

}
