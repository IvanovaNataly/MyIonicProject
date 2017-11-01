import { NgModule } from '@angular/core';
import { OverslideDirective } from './overslide/overslide';
import { LazyLoadDirective } from './lazy-load/lazy-load';
import { CrossOutDirective } from './cross-out/cross-out';

@NgModule({
	declarations: [OverslideDirective,
    LazyLoadDirective,
    CrossOutDirective],
	imports: [],
	exports: [OverslideDirective,
    LazyLoadDirective,
    CrossOutDirective]
})
export class DirectivesModule {}
