import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//app modules
import { HomeModule } from './home/home.module';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

import { routing } from './app.routing';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
    // routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
