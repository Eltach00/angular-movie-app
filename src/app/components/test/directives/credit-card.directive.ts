import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[creditCard]',
})
export class CreditCardDirective {
  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;

    let trimmed = input.value.replace(/\s+/g, '');
    if (trimmed.length > 16) {
      trimmed = trimmed.slice(0, 16);
    }

    const numbers = [];

    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.slice());
    }

    input.value = trimmed;
  }

  constructor(private element: ElementRef) {
    console.log(this.element);
  }
}
