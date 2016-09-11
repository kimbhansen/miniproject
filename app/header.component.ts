import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'mye-header',
	templateUrl: './app/header.component.html',
	styles: [`
		nav ul li {
			display: inline-block;
		}
	`]

})
export class HeaderComponent implements OnInit {

	ngOnInit() { }
}