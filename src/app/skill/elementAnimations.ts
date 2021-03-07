import {trigger, transition, query,style, stagger} from '@angular/animations'

export const ANIMATION_ELEMENT = 'element'

export const elementAnimations = trigger('elementAnimations', [
    transition(':enter, :increment,: decrement',[
        query(
            '.'+ ANIMATION_ELEMENT,
            [
                style({
                    opacity:0,
                    transform: 'translate(-15px)'
                }),
                stagger(
                    '0.5 ease-in-out',
                    style({
                        opacity:1, transform: 'translateY(0)'
                    })
                )

            ],
            {
                optional:true
            }
        )
    ])
])