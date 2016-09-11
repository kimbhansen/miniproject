import { Component, OnInit } from '@angular/core';
import { ShoeDataService } from './shoe-data.service';

@Component({
    selector: 'shoe-list',
    templateUrl: './app/shoe-list.component.html',
    
})
export class ShoeListComponent implements OnInit{ 
	shoes: Shoe[];

	constructor(private shoeDataService: ShoeDataService){}

	ngOnInit() {
		this.shoes = this.shoeDataService.getShoeData();
	}

	

}