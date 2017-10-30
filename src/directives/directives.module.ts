import { NgModule } from '@angular/core';
import { OverslideDirective } from './overslide/overslide';
import { LazyLoadDirective } from './lazy-load/lazy-load';

@NgModule({
	declarations: [OverslideDirective,
    LazyLoadDirective],
	imports: [],
	exports: [OverslideDirective,
    LazyLoadDirective]
})
export class DirectivesModule {}
