import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <small class="text-muted">I am using ng-bootstrap!!!</small>
  `,
})
export class AppComponent  { name = 'World'; }
