import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { WeAreModule } from "../we-are/we-are.module";
import { OurMentorsModule } from "../our-mentors/our-mentors.module";
import { AboutModule } from '../about/about.module';
import { OurServicesModule } from "../our-services/our-services.module";
import { PortafolioModule } from "../portafolio/portafolio.module";
import { ComunityModule } from "../comunity/comunity.module";
import { OpinionModule } from "../opinion/opinion.module";
import { TecnologyModule } from "../tecnology/tecnology.module";

@NgModule({
	declarations: [HomeComponent],
	imports: [
    CommonModule,
    HomeRoutingModule,
    WeAreModule,
    OurMentorsModule,
    AboutModule,
    OurServicesModule,
    PortafolioModule,
    ComunityModule,
    OpinionModule,
 TecnologyModule
  ],
})
export class HomeModule {}
