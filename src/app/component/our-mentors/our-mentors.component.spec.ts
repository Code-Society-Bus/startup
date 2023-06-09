import { ComponentFixture, TestBed } from "@angular/core/testing";

import { OurMentorsComponent } from "./our-mentors.component";

describe("OurMentorsComponent", () => {
	let component: OurMentorsComponent;
	let fixture: ComponentFixture<OurMentorsComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [OurMentorsComponent],
		});
		fixture = TestBed.createComponent(OurMentorsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
