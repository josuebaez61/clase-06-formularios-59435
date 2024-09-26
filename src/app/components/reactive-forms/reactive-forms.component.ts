import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  nameValidator,
  noHomeroValidator,
} from '../../utils/custom-validators';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss',
})
export class ReactiveFormsComponent {
  formularioRegistro: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // this.formularioRegistro = new FormGroup({})
    this.formularioRegistro = this.formBuilder.group({
      firstName: ['', [nameValidator]],
      // firstName: this.formBuilder.control(''),
      // firstName: new FormControl(''),
      lastName: ['', [nameValidator]],
    });
  }

  get firstNameControlHasPatternError() {
    return (
      this.firstNameControl?.hasError('pattern') &&
      this.firstNameControl.touched
    );
  }

  get firstNameControl() {
    return this.formularioRegistro.get('firstName');
  }

  get firstNameControlHasRequiredError() {
    return (
      this.firstNameControl?.hasError('required') &&
      this.firstNameControl.touched
    );
  }

  get firstNameControlHasMinLengthError() {
    return (
      this.firstNameControl?.hasError('minlength') &&
      this.firstNameControl.touched
    );
  }

  onSubmit(): void {
    if (this.formularioRegistro.invalid) {
      console.log(this.formularioRegistro.get('firstName')?.errors);
      // alert('El formulario es invalido');
      this.formularioRegistro.markAllAsTouched();
    } else {
      console.log(this.formularioRegistro.value);
    }
  }
}
