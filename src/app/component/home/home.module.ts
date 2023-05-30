import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { WeAreModule } from "../we-are/we-are.module";
import { OurMentorsModule } from "../our-mentors/our-mentors.module";
import { AboutModule } from '../about/about.module';
import { OurServicesModule } from "../our-services/our-services.module";

@NgModule({
	declarations: [HomeComponent],
	imports: [CommonModule, HomeRoutingModule, WeAreModule, OurMentorsModule, AboutModule,OurServicesModule],
})
export class HomeModule {}
