import { ComponentFixture, TestBed } from '@angular/core/testing'; 
import { By } from '@angular/platform-browser'; 
import { DebugElement } from '@angular/core'; 
import { BannerComponent } from './banner.component'; 



describe('BannerComponent', function() {

	//global propety def here!
	let comp: BannerComponent;
	let fixture: ComponentFixture<BannerComponent>; 
	let de: DebugElement; 
	let el: HTMLElement; 

	beforeEach(() => { 
		// declare the test component 
		TestBed.configureTestingModule({declarations: [ BannerComponent ] });
		//global propety init here!
		fixture = TestBed.createComponent(BannerComponent);
		comp = fixture.componentInstance;
		de = fixture.debugElement.query(By.css('h1'));
		el = de.nativeElement;			
	}); 
	
	it('should display original title', () => { 
		fixture.detectChanges(); 
		expect(el.textContent).toContain(comp.title); 
	}); 

	it('should display a different test title', () => { 
		comp.title = 'Test Title'; 
		fixture.detectChanges(); 
		expect(el.textContent).toContain('Test Title'); 
	}); 
	 
}); 