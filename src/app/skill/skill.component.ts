import { Component, OnInit,ElementRef,ViewChild,ChangeDetectorRef} from '@angular/core';
import{ trigger, state, style, transition, animate,query,stagger, keyframes} from '@angular/animations'
import {propertyList} from './property'
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  animations:[
    trigger('opens',[
      transition('* => *',[
        query(':enter',style({opacity:0}),{optional:true}),
        query(':enter'
        ,stagger('50ms',[
          animate('400ms ease-in', keyframes([
            style({opacity:0, transform:'translateY(-75px)',offset:0}),
            style({opacity:0.5, transform:'translateY(35px)',offset:0.3}),
            style({opacity:1, transform:'translateY(0px)',offset:1}),
          ]))
        ]),{optional:true},)
      ])
    ]),
    trigger('down',[
      state('show', style({
        transform:'translateY(-50px)',offset:0
      })),
      state('hide', style({
        transform:'translateY(0px)',offset:0
      })),
      transition('show => hide',animate('300ms ease-in')),
      transition('hide => show',animate('600ms ease-in')),
    ]),
    trigger('up',[
      state('show', style({
        transform:'translateY(50px)',offset:0
      })),
      state('hide', style({
        transform:'translateY(0px)',offset:0
      })),
      transition('show => hide',animate('300ms ease-in')),
      transition('hide => show',animate('600ms ease-in')),
    ]),
  ]
})

export class SkillComponent implements OnInit {
  @ViewChild('dataContainer') dataContainer: ElementRef;

  show = false;
  flag = false;
  Xsmall = false;
  propertyList = propertyList;

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) {
  }

  get upSkill(){
    return this.show? 'show': 'hide'
  }

  showDescription(i:number){
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.XSmall] || result.breakpoints[Breakpoints.Small] ) {
        this.Xsmall = true;
        let describe = this.propertyList[i].description;
        const p = document.createElement('p');
        this.dataContainer.nativeElement.innerHTML = describe;
      }
      if (result.breakpoints[Breakpoints.Medium] || result.breakpoints[Breakpoints.Large]) {
        this.Xsmall = false;
        console.log('oks')
        let describe = this.propertyList[i].description;
        const p = document.createElement('p');
        this.show = !this.show;
        if(!this.flag){
          this.dataContainer.nativeElement.innerHTML = describe;
         this.flag = true;
        }
        else if(this.flag){
          this.dataContainer.nativeElement.innerHTML = '';
          this.flag = false;
        }
      }
    })
  }
  ngOnInit(): void {
  }
 
}
