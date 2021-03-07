import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  keyframes,
  query,
  animateChild
} from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('biggerBackground',[
      transition(':enter', [
          query('@childBackground', [
          animateChild()
        ]),
          query('@childAnimation', [
          animateChild()
        ])
      ]),
    ]),
    trigger('childBackground', [
      transition(':enter', [
       style({
        }),
        animate('700ms', keyframes([
          style({opacity:.7, backgroundSize: '520vh'}),
          style({opacity:.8,backgroundSize: '350vh'}),
          style({opacity:.9,backgroundSize: '300vh'}),
        ])),
      ])
    ]),
    trigger('childAnimation', [
      transition(':enter', [
       style({opacity: 0, transform: ' scale(0)'
        }),
        animate(`1500ms cubic-bezier(1)`, keyframes([
          style({
            opacity: 1, transform: ' scale(1)'
          })
        ]))
      ])
    ])
  ],
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
