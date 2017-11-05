import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
    selector: '[lazyLoad]'
})

export class LazyLoadDirective implements OnInit {
    @Input()
    lazyLoad: string;

    constructor(private elementRef: ElementRef){
    };

    ngOnInit() {
        let image = document.createElement('img');
        image.src = this.lazyLoad;
        image.addEventListener('load', event => {
            setTimeout(() => {
                this.elementRef.nativeElement.className = "image";
                this.elementRef.nativeElement.src = image.src;
                console.log(image);
            }, 2000);
        });
    }
}
