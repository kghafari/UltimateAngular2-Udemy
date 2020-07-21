import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'testserver';
  serverCreated = false;
  serverDeleted = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Sever was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverDeleted = false;
  }

  onDeleteServer() {
    // setTimeout(() => {
    //   this.allowDelete = true;
    // }, 2000);
    this.serverCreationStatus = `Server ${this.serverName} has been removed.`;
    this.serverDeleted = true;
    this.serverCreated = false;
  }

  onUpdateServerName(event: any) {
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
