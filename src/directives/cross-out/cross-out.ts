import { Directive, Output, ElementRef, Renderer2, EventEmitter } from '@angular/core';

@Directive({
    selector: '[cross-out]',
    host: {
        '(ionDrag)': 'handleDrag($event)'
    }
})
export class CrossOutDirective {

    @Output()
    crossOut: any = new EventEmitter();

    triggered: boolean = false;

    constructor(public element: ElementRef, public renderer: Renderer2) {
    }

    handleDrag(e) {
        // console.log(this.element.nativeElement.children);
        if(Math.abs(e.getSlidingPercent()) > 1.7 && !this.triggered){

            this.triggered = true;
            let el = this.element.nativeElement;
            this.renderer.addClass(el, 'cross-out');

            setTimeout(() => {
                this.crossOut.emit(true);
            }, 300);
        }
    }
}

