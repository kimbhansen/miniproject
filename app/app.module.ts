import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}	from '@angular/forms';
import { AppComponent }  from './app.component';
import { ContactComponent } from './contact.component';
import { routing } from './app.routing'; 
import { HomeComponent } from './home.component';
import { ShoeListComponent } from './shoe-list.component';
import { ShoeDetailComponent} from './shoe-detail.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent, ContactComponent, HomeComponent, ShoeListComponent, ShoeDetailComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
