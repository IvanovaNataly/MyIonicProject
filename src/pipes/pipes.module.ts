import { NgModule } from '@angular/core';
import { OptionSidePipe } from './option-side/option-side';
import { KeysPipe } from './keys/keys';
@NgModule({
	declarations: [OptionSidePipe,
    KeysPipe],
	imports: [],
	exports: [OptionSidePipe,
    KeysPipe]
})
export class PipesModule {}
