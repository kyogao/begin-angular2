import { ComponentFixture, TestBed } from '@angular/core/testing'; 
import { By } from '@angular/platform-browser'; 
import { DebugElement } from '@angular/core'; 
import { BannerComponent } from './banner.component'; 



describe('BannerComponent', function() {

	let comp: BannerComponent;
	let fixture: ComponentFixture<BannerComponent>; 
	let de: DebugElement; 
	let el: HTMLElement; 

	beforeEach(() => { 
		// declare the test component 
		TestBed.configureTestingModule({declarations: [ BannerComponent ] });
		fixture = TestBed.createComponent(BannerComponent);
		comp = fixture.componentInstance;
		de = fixture.debugElement.query(By.css('h1'));
		el = de.nativeElement;			
	}); 
	
	// let fixture = TestBed.createComponent(BannerComponent); 
	// // BannerComponent test instance 
	// comp = fixture.componentInstance; 	
	// // query for the title <h1> by CSS element selector
	// de = fixture.debugElement.query(By.css('h1')); 
	// el = de.nativeElement; 
	it('should display original title', () => { 
		fixture.detectChanges(); 
		expect(el.textContent).toContain(comp.title); 
	}); 

	it('should display a different test title', () => { 
		let fixture = TestBed.createComponent(BannerComponent);
		let comp = fixture.componentInstance; 
		comp.title = 'Test Title'; 
		fixture.detectChanges(); 
		let de = fixture.debugElement.query(By.css('h1'));
		let el = de.nativeElement;
		expect(el.textContent).toContain('Test Title'); 
	}); 
	 
}); 