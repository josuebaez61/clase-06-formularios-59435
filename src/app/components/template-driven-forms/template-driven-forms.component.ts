import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.scss',
})
export class TemplateDrivenFormsComponent {
  registroModel = {
    firstName: '',
    lastName: '',
  };

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      form.form.markAllAsTouched();
    } else {
      console.log(form);
      console.log(this.registroModel);
    }
  }
}
