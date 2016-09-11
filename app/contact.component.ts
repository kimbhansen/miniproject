import { Component } from '@angular/core';

class Contact {
	fullName: string;
	email: string;
	brand: string;
}

@Component({
	selector: 'newsletter',
	templateUrl: './app/contact.component.html'
})
export class ContactComponent {
	brands = ["adidas", "nike","camper","superga","tımberland","new balance","converse","converse","puma","kinetix","tiger","lacoste","reebok","cat","dockers"];


	model: Contact = new Contact();

	submitted = false;

	register() {
		this.submitted = true;
	}
}