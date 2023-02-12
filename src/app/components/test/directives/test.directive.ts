import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[colorDir]',
  host: {
    '(click)': 'dirLogic()',
  },
})
export class TestDirective {
  @Input() number = 0;
  @Input() dividedBy = 1;

  constructor(private el: ElementRef) {}

  dirLogic() {
    if (this.number % this.dividedBy !== 0) {
      this.el.nativeElement.classList.add('red');
    } else {
      this.el.nativeElement.classList.add('green');
    }
  }
}
