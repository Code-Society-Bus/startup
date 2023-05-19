import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { WeAreRoutingModule } from "./we-are-routing.module";
import { WeAreComponent } from "./we-are.component";

@NgModule({
	declarations: [WeAreComponent],
	imports: [CommonModule, WeAreRoutingModule],
	exports: [WeAreComponent],
})
export class WeAreModule {}
