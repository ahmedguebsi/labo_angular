import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First';
  name = 'yosr';
  agenda = [{date:"17/12", message:"BA"},{date:"18/12", message:"BB"}];
}
