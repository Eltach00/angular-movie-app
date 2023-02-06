import { NgModule } from '@angular/core';
import { SliderComponent } from './components/slider/slider.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule],
  declarations: [SliderComponent],
  exports: [SliderComponent],
})
export class TestModule {}
