import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RememberComponent } from './components/test/remember/remember.component';
import { AuthFormComponent } from './components/test/auth-form/auth-form.component';
import { TestComponent } from './components/test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreditCardDirective } from './components/test/directives/credit-card.directive';
import { TestDirective } from './components/test/directives/test.directive';
import { HeroComponent } from './components/test/hero/hero.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    TestComponent,
    AuthFormComponent,
    RememberComponent,
    CreditCardDirective,
    TestDirective,
    HeroComponent,
  ],
  exports: [TestComponent, AuthFormComponent, RememberComponent],
})
export class TestModule {}
