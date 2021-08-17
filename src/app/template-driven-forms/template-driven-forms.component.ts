// Should import FormsModule from '@angular/forms' in app.module.ts and FormsModule should be added in imports array

// template driven forms are for simple forms like login . they have inbuilt validation class

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css'],
})
export class TemplateDrivenFormsComponent implements OnInit {
  onSubmit(form: any) {
    console.log(form.value);
    form.reset();
  }

  constructor() {}

  ngOnInit(): void {}
}
