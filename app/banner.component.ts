import { Component } from '@angular/core'; 

@Component({ 
	selector: 'app-banner', 
	template: `
		<h1>{{title}}</h1>
		<a>{{hero}}</a>
	` 
}) 

export class BannerComponent { 
	title = 'Test Tour of Heroes';
	hero = 'Superman is a hero'; 
} 