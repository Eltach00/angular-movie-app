import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { RememberComponent } from './remember/remember.component';
import { CreditCardDirective } from './directives/credit-card.directive';
import { TestDirective } from './directives/test.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: TestComponent }];

@NgModule({
  declarations: [
    TestComponent,
    AuthFormComponent,
    RememberComponent,
    CreditCardDirective,
    TestDirective,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export default class TestModuleModule {}
