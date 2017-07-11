Demo to create the simplest possible service.

Checkout (https://youtu.be/h5tB_kvuQO8)[Understanding Angular 2 Services - Tutorial]

# gh-pages demo service

gh-pages demo [https://shanegibney.github.io/angular-service-example/]

# Create the project with abgular-cli

Using Angular-cli a new project was created with,

$ ng new angular-service-project

# Create a service with angular-cli

The service was created with,

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

To make this service available to all components, cut the line

```
  providers: [ExampleServiceService]
  ```

from app.component.ts and put it is app.module.ts and also make it available with

```
import { ExampleServiceService } from './example-service.service'
```

app.module.ts should look like this,

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ExampleServiceService } from './example-service.service'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ExampleServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
