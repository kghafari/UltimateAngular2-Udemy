//import to recognize @Component decorator
import { Component } from '@angular/core';

//generally, we want to name the FOLDER and the COMPONENTS the same, or similarly.
    //eg: given FolderName => FolderName.component.ts, FolderName.component.html, etc...
    //in this case, we have a folder 'server' which will contain sever.component.ts, .html, etc...

//add a special decorator to 'enchance' your class to be treated as a Component
    //remember to import Component from  @angular/core
@Component({
  //now... let's configure this component...

  //"html tag" to use in other HTML components templates. Make sure it's a UNIQUE name
  selector: 'app-server',
  //for the 'template' of the HTML file for /this specific component/
      //create the html file, and enter it's path here.
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})

//a component is just a TypeScript class - but it needs the @Component decorator for ts to see it correctly
//note the naming convention: ServerComponent
export class ServerComponent {
  serverId: number = this.getRandomInt(1, 11);
  serverStatus: string = 'offline';

  constructor()
  {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

   getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
};
