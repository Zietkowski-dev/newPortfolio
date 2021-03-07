import { Component, OnInit} from '@angular/core';
import {trigger, transition, style,query, animate , stagger, keyframes, state, animation,animateChild} from '@angular/animations'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
    trigger('showContainer',[
      transition('* => *',[animation([],
        { params: { time: '1000ms', start: 0, end: 1 }}),
        query('@childUp', [
          animateChild()
        ]),
        query('@childDown', [
         animateChild()
        ]),
        query('@childMiddle', [
          stagger(50, [animateChild()])
        ]),
        query('@childParent', [
          animateChild()
        ]),
      ])
    ]),
   
    ,
    trigger('childUp', [
      transition(':enter', [
       style({ transform: 'translateX(-2200px) '
        }),
        animate(`600ms ease-in`, keyframes([
          style({
          transform: 'translateX(0) ',
        }),
        ]))
      ])
    ]),
    trigger('childMiddle', [
      transition(':enter', [
        animate(`500ms ease-in`, keyframes([
          style({
          transform: 'translateX(-2200px)', height: '0px' ,fontSize: '0px', border:'none', padding:'0px'
        }),
          style({
          transform: 'translateX(0px)' , height: '0px' ,fontSize: '0px', border:'none', padding:'0px'
        })
        ]))
      ])
    ]),
    trigger('childDown', [
      transition(':enter', [
       style({ transform: 'translateX(-2200px) '
        }),
        animate(`600ms ease-in`, keyframes([
          style({
          transform: 'translateX(0)'
        })
        ]))
      ])
    ]),
    trigger('childParent', [
      transition(':enter', [
        animate(`50ms ease-in`, keyframes([
        ]))
      ]),
    ]),
    trigger("changeDivSize", [
        state(
          "initial",
          style({
            
          })
        ),
        state(
          "final",
          style({
            backgroundImage: 'url(../../assets/notOfficially-min.jpg)',
            transform: ' rotate3d(0,1,0,180deg)  perspective(200px) scale(1.2)',
          })
        ),
        transition("* => initial", [animate("1s")]),
        transition("* => final", [animate("0.5s")])
      ])
  ]
})
export class HomeComponent implements OnInit {

  currentState = 'initial';
  changeFoto(){
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

  ngOnInit(): void {
  }
}