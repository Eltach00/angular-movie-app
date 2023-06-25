import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { RememberComponent } from './remember/remember.component';
import { CreditCardDirective } from './directives/credit-card.directive';
import { TestDirective } from './directives/test.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestFormComponent } from './test-form/test-form.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

const routes: Routes = [{ path: '', component: TestComponent }];

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    TestComponent,
    AuthFormComponent,
    RememberComponent,
    CreditCardDirective,
    TestDirective,
    TestFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
})
export default class TestModuleModule {}
