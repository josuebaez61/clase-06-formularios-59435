import { ValidatorFn, Validators } from '@angular/forms';

export const noHomeroValidator: ValidatorFn = (control) => {
  if (
    typeof control.value === 'string' &&
    control.value.toLocaleLowerCase().includes('homero')
  ) {
    return {
      noHomeroValidator: 'No se admiten Homeros',
    };
  }
  return null;
};

export const nameValidator = Validators.compose([
  Validators.required,
  Validators.minLength(3),
  Validators.pattern(/^[a-zA-Z]+$/),
  noHomeroValidator,
]);
