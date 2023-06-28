import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss'],
})
export class TestFormComponent {
  usernameCtrl = this.formBuilder.control('', Validators.required);
  passwordCtrl = this.formBuilder.control('', Validators.required);
  confirmCtrl = this.formBuilder.control('', Validators.required);
  passwordStrength = 0;
  tagsArray = this.formBuilder.array(['']);

  passwordForm = this.formBuilder.group(
    {
      password: this.passwordCtrl,
      confirm: this.confirmCtrl,
    },
    { validators: TestFormComponent.matchPass }
  );

  userForm = this.formBuilder.group(
    {
      username: this.usernameCtrl,
      passwordForm: this.passwordForm,
      tags: this.tagsArray,
    },
    { updateOn: 'blur' }
  );

  constructor(private formBuilder: FormBuilder) {
    this.passwordCtrl.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((newValue) => {
        this.passwordStrength = newValue ? newValue.length : 0;
      });
  }

  static matchPass = (ct: AbstractControl): ValidationErrors | null => {
    const pass = ct.get('password').value;
    const confirmCtrl = ct.get('confirm').value;
    return pass === confirmCtrl ? null : { notMatch: true };
  };

  register(): void {
    console.log(this.userForm.value);
  }

  addTag() {
    this.tagsArray.push(this.formBuilder.control(''));
  }
  removeTag(i: number) {
    this.tagsArray.removeAt(i);
  }
}
