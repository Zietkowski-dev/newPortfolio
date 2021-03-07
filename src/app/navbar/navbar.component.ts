import { Component, OnInit, ViewChild, ElementRef , Output, EventEmitter} from '@angular/core';
import {gsap} from 'gsap'
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    @ViewChild('potfolio',{static:true})
    potfolio:ElementRef<HTMLDivElement>
    @ViewChild('space',{static:true})
    space:ElementRef<HTMLDivElement>
    @ViewChild('menu',{static:true})
    menu:ElementRef<HTMLDivElement>
    // @Output() public sidenavToggle = new EventEmitter();

    showNav = false
  constructor() { }

  ngOnInit(): void {
    // this.initAnimations();
  }
public onToggleSidenav = ()=> {
// this.sidenavToggle.emit()
}



  // initAnimations():void{
  //   gsap.from(this.space.nativeElement,{
  //     delay:.3,
  //     duration:0.4,
  //     opacity:1,
  //     // y:10,
  //     stagger:4.15
  //   }),
  //   gsap.from(this.potfolio.nativeElement,{
  //     delay:.6,
  //     duration:0.4,
  //     opacity:0,
  //     // y:100,
  //     stagger:0.15
  //   }),
  //   gsap.from(this.menu.nativeElement.childNodes,{
  //     delay:.6,
  //     duration:0.4,
  //     opacity:0,
  //     // y:10,
  //     stagger:0.15
  //   })
  // }

}
