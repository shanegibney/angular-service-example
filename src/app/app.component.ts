import { Component, OnInit } from '@angular/core'; // added OnInit
import { ExampleServiceService } from './example-service.service' // added this import

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ExampleServiceService]
})
export class AppComponent {
  title = 'app works!';
  example: string;
  constructor(private _exampleServiceService: ExampleServiceService){ // added this constructor
  }
  // added this ngOnInit method
  ngOnInit(){
 this.example = this._exampleServiceService.someMethod();
  }
}
