import { Component, OnInit } from '@angular/core';
import { ExampleServiceService } from './example-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ExampleServiceService]
})
export class AppComponent {
  title = 'app works!';
  example: string;
  constructor(private _exampleServiceService: ExampleServiceService){
  }
  ngOnInit(){
 this.example = this._exampleServiceService.someMethod();
  }
}
