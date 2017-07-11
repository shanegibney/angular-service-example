# gh-pages demo service

gh-pages demo [https://shanegibney.github.io/angular-service-example/]

# Create the project with abgular-cli

Using Angular-cli a new project was created with,

$ ng new angular-service-project

# Create a service with angular-cli

The service was created

$ ng g s example-service

where 'g' is a shortcut for 'generate' and 's' is a shortcut for 'service'.

The actual service is at: example-service-service.ts

```
import { Injectable } from '@angular/core';

@Injectable()
export class ExampleServiceService {

  someMethod(){
    return "Heya!";
  }
  constructor() { }

}
```

Then make the changes to app.component.ts

```
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
```

Get example into the app.component.html file,

```HTML
<h1>
  {{ title }}
</h1>
<h3>{{ example }}</h3>
```
