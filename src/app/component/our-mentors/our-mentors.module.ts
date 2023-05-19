import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OurMentorsRoutingModule } from "./our-mentors-routing.module";
import { OurMentorsComponent } from "./our-mentors.component";

@NgModule({
	declarations: [OurMentorsComponent],
	imports: [CommonModule, OurMentorsRoutingModule],
	exports: [OurMentorsComponent],
})
export class OurMentorsModule {}
