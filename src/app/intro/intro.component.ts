import { Component, OnInit,ElementRef,ViewChild, AfterViewInit,ViewChildren, QueryList,Renderer2} from '@angular/core';
import{ trigger, state, style, transition, animate,query,stagger, keyframes, animateChild} from '@angular/animations'
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
animations: [
  trigger('start', [
    transition(':enter', [
      query('@rectangularAnimation', [
        stagger(40,[
          animateChild()
        ])
      ]),
         query('@textH1', [
        animateChild()
      ]),
        query('@textH2', [
          stagger(1000, animateChild())
      ]),
        query('@btn', [
          stagger(2000, animateChild())
      ]),
    ])
  ]),


  trigger('rectangularAnimation', [
    transition(':enter', [
     style({
       backgroundColor:'green' ,
      }),
      animate(`100ms`, keyframes([
        style({ opacity: 0,
        transform: 'scale(.1)',  }),
        style({ opacity: 1,
        transform: 'scale(1)',backgroundColor:'rgba(17, 78, 73, 0.5)'  })
      ]))
    ])
  ]),
  trigger('textH1', [
    transition(':enter', [
     style({
      }),
      animate(`300ms cubic-bezier(.17,.67,1,1.41)`, keyframes([
        style({ opacity: 0,
        transform: 'translate(-200%)', }),
        style({ opacity: 1,
        transform: 'translate(0%)',  position: 'fixed'})
      ]))
    ])
  ]),
  trigger('textH2', [
    state(':enter', style({
    })),
    transition(':enter', [
      animate(`300ms cubic-bezier(.17,.67,1,1.41)`, keyframes([
        style({
          transform: 'scale(0)'
        }),
        style({
          transform: 'scale(1) '
      }
        )
      ]))
    ]),
  ]),
  trigger('btn', [
    state(':enter', style({
    })),
    transition(':enter', [
      animate(`300ms cubic-bezier(.17,.67,1,1.41)`, keyframes([
        style({
          transform: 'scale(0)'
        }),
        style({
          transform: 'scale(1) '
      }
        )
      ]))
    ]),
  ]),
]
})



export class IntroComponent  implements OnInit, AfterViewInit {
  divs: Array<any> = [];
  rectangular:string = 'rectangular'
  @ViewChildren("divElement") domReference: QueryList<"divElement">;

  constructor(private renderer: Renderer2,private el: ElementRef) {
   }

   createReactangular():void{
    for(let i =0; i<28; i++){
      const div = this.renderer.createElement('div');
      this.divs.push(div)
    }
    this.rectangular = 'rectangular'
  }

  ngAfterViewInit():void{
    let divs: any[]=this.domReference.toArray();
    let i = 0 
    setTimeout(()=>{
      setInterval(()=> {
        if(i === divs.length){
          i = 0;
        };
         
         divs[i].nativeElement.style.backgroundColor='rgba(17, 78, 73, 0.5)';
         setTimeout(()=>{
           if(true){
             divs[i].nativeElement.style.backgroundColor='transparent';
           }
         },250)
         i++
       },250);
    },2000)
    
    
   }

 

  ngOnInit(): void {
    this.createReactangular();
  }
}