import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//AppComponent is a /special/ component - It acts as the 'root' component.
    //see the bootstrap component in app.module.ts
//All other componenets we create will not be added to the index.html file.
    //instead, they'll be added to the app.component.html file

//each component should have its own folder
export class AppComponent {
  clickStatus = 'unclicked';

  onClickyClick(){
    this.clickStatus = 'clicked';
  }
}
