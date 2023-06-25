import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss'],
})
export class TestFormComponent {
  myForm: FormGroup<{
    username: FormControl<string>;
    password: FormControl<string>;
  }>;
  username: FormControl<string>;
  password: FormControl<string>;

  constructor(private formBuilder: FormBuilder) {
    this.username = this.formBuilder.control('', [
      Validators.required,
      Validators.minLength(2),
    ]);
    this.password = this.formBuilder.control('');
    this.myForm = this.formBuilder.group({
      username: this.username,
      password: this.password,
    });
  }

  onSubmit(): void {
    console.log(this.myForm.value);
  }
}
