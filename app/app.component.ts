import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { HomeComponent } from './home.component';
import { ShoeListComponent } from './shoe-list.component';
import { ShoeDataService } from './shoe-data.service';
import { ContactComponent} from './contact.component';


@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    
    directives: [ HeaderComponent, FooterComponent, HomeComponent, ShoeListComponent, ContactComponent ],
    providers: [ ShoeDataService ]
})
export class AppComponent { 
	
}