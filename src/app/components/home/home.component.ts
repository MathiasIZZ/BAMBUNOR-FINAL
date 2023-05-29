import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductService} from '../../services/product.service';
import {CartService} from '../../services/cart.service';
import {ServerResponse} from '../../models/product.model';

import {gsap, TimelineMax} from 'gsap';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: any[] = [];

  TL = new TimelineMax({paused: true});

  constructor(private productService: ProductService,
              private cartService: CartService,
              private router: Router) { }

  ngOnInit(): void {
    this.productService.getAllProducts(4).subscribe( (prods: ServerResponse) => {
      this.products = prods.products;
      console.log(this.products);
    });

    this.createAnim();

    gsap.utils.toArray('h1').forEach( (elem) => {

      ScrollTrigger.create({
        trigger: 'h1',
        start: 'top 3%',
        onEnter: () => {
          gsap.to('body', {backgroundColor: '#D8DAD3'});
          gsap.to('h1', {color: '#1f2833'});
          gsap.to('h2', {color: '#1f2833'});
          gsap.to('p', {color: '#1f2833'});
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

  createAnim() {
    const titre = document.querySelectorAll('.anime');
    this.TL.from(titre[0], 5, {y: -100, opacity: 0});
    this.TL.play();
  }


  selectProduct(id: number){
    this.router.navigate(['/product', id]).then();
  }

  // tslint:disable-next-line:typedef
  addToCart(id: number){
    this.cartService.addProductToCart(id);
  }





}
