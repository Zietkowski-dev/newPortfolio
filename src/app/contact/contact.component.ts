import { Component, OnInit } from '@angular/core';
import{ trigger, style, transition, animate,query, keyframes,animateChild} from '@angular/animations'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations:[
    trigger('enterShowing', [
      transition(':enter', [
       style({
        }),
        animate( `300ms ease-in`, keyframes([
          style({
          transform: 'translateX(-150%)',
        }),
          style({
          transform: 'translateX(0%)'
        })
        ])),
        query('@enterChild', [
          animateChild()
        ])
      ]),
     
    ]),
    trigger('enterChild',[
      transition(':enter', [
        style({
         }),
         animate(`400ms ease-in`, keyframes([
           style({ opacity: 0,
           transform: 'scale(.1)'}),
           style({ opacity: 1,
           transform: 'scale(1)'})
         ]))
       ])
    ])
  ]
})
export class ContactComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
