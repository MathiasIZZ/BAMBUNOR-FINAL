import { Component, OnInit } from '@angular/core';
import {CartModelServer} from '../../models/cart.model';
import {CartService} from '../../services/cart.service';
import {UserService} from '../../services/user.service';
import * as $ from 'jquery';
import {gsap} from "gsap";





@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartData: CartModelServer;
  cartTotal: number;

  // Auth
  authState: boolean;

  constructor(private cartService: CartService, private userService: UserService) { }

  ngOnInit(): void {

    this.cartService.cartTotal$.subscribe( total => this.cartTotal = total);

    this.cartService.cartData$.subscribe( data => this.cartData = data);

    this.userService.authState$.subscribe( authState => this.authState = authState);

    const cart = document.getElementById('dropdown');

    const card = document.getElementById('droppy');


    let lastScrollTop = 0;



/*
    $(window).scroll( function (event){
      const st = $(this).scrollTop();
      if (st > lastScrollTop) {
        $('.arene').toggleClass('disparition', $(this).scrollTop() > 60);
      }
      else {
        $('.arene').removeClass('disparition', $(this).scrollTop() > 60);
      }
      lastScrollTop = st;
    });
*/

/*
    $(window).scroll( function(event) {
      $('.arene').toggleClass('disparition', $(this).scrollTop() > 60);
      $('.arene').toggleClass('fond', $(this).scrollTop() > 600);
    });
*/

    const activation = document.getElementById('active-navv');

    activation.addEventListener('click', () => {

      window.scrollTo(0, 0);

      const nav = document.getElementById('navigation');
      const chargement = document.getElementById('chargement2');

      nav.style.display = 'block';
      chargement.style.display = 'none';

      /*
      if (nav.style.display === 'none') {
        nav.style.display = 'block';
        chargement.style.display = 'none';
      } else {
        nav.style.display = 'none';
        chargement.style.display = 'block';
      }*/


    });

    const fermeture = document.getElementById('close');


    fermeture.addEventListener('click', () => {

      const nav = document.getElementById('navigation');

      const chargement = document.getElementById('chargement2');

      nav.style.display = 'none';
      chargement.style.display = 'block';

    });

    // MENU QUI S ARRACHE

    const lien1 = document.getElementById('lien1'); 

    lien1.addEventListener('click', () => {
      const nav = document.getElementById('navigation');

      const chargement = document.getElementById('chargement2');

      nav.style.display = 'none';
      chargement.style.display = 'block';
    });

    const lien2 = document.getElementById('lien2'); 

    lien2.addEventListener('click', () => {
      const nav = document.getElementById('navigation');

      const chargement = document.getElementById('chargement2');

      nav.style.display = 'none';
      chargement.style.display = 'block';
    });

    const lien3 = document.getElementById('lien3'); 

    lien3.addEventListener('click', () => {
      const nav = document.getElementById('navigation');

      const chargement = document.getElementById('chargement2');

      nav.style.display = 'none';
      chargement.style.display = 'block';
    });

    const lien4 = document.getElementById('lien4'); 

    lien4.addEventListener('click', () => {
      const nav = document.getElementById('navigation');

      const chargement = document.getElementById('chargement2');

      nav.style.display = 'none';
      chargement.style.display = 'block';
    });

    const lien5 = document.getElementById('lien5'); 

    lien5.addEventListener('click', () => {
      const nav = document.getElementById('navigation');

      const chargement = document.getElementById('chargement2');

      nav.style.display = 'none';
      chargement.style.display = 'block';
    });





    cart.addEventListener('click', () => {
      if (card.style.visibility === 'visible') {
        card.style.visibility = 'hidden';
      }
      else {
        card.style.visibility = 'visible';
      }
    });

    gsap.utils.toArray('.c-usp').forEach(elem => {
      gsap.from(document.querySelectorAll('h2'), {
        scrollTrigger: elem,
        autoAlpha: 1,
        y: 25,
        duration: 0.7,
        stagger: 0.25
      });
    });




  }

}
