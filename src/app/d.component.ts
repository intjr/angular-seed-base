import { Component } from '@angular/core';

@Component({
  selector: 'app-d',
  template: `
<form #loginForm="ngForm">
    Angular版本：
    <div>
      <select name="version" [ngModel]="version" required>
        <option
        *ngFor="let version of versions;"
          [value]="version">
          {{version}}
        </option>
      </select>
      <label></label>
    </div>
    <hr>
    {{loginForm.value | json}}
  </form>
  `,
  styles: [`
   select.ng-invalid + label:after {
      content: '<-- 请选择版本!'
    }
  `
  ]
})
export class DComponent {
  versions = ['1.x', '2.x', '3.x'];
}