import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//NEW COMPONENT STEP 2 - Manually import your component(class) from its relative file path. (no extention needed)
  //this is a TYPESCRIPT feature
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component'

//CREATING NEW COMPONENTS: Just creating the file is not enough. We need to make Angular 'aware' of it
@NgModule({
  declarations: [
    AppComponent,
    //NEW COMPONENT STEP 1 - add your component(class) here, in the declarations
      //this is an ANGULAR feature
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] //generally, leave this line alone. Remember: we want our index.html to
})
export class AppModule { }
