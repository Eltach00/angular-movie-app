import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  QueryList,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RememberComponent } from '../remember/remember.component';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent
  implements OnInit, AfterContentInit, AfterViewInit
{
  @Output() submited = new EventEmitter();
  myForm: FormGroup;
  @ContentChildren(RememberComponent) remember: QueryList<RememberComponent>;
  showMessage = false;
  @ViewChild('inputS') inp: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // this.inp.nativeElement.setAttribute('placeholder', 'Enter Name');
    this.renderer.setAttribute(
      this.inp.nativeElement,
      'placeholder',
      'enter name'
    );
  }

  ngAfterContentInit(): void {
    if (this.remember) {
      this.remember.forEach((item) => {
        item.checked.subscribe((checked) => {
          this.showMessage = checked;
        });
      });
    }
  }
  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.myForm = new FormGroup({
      inp: new FormControl(''),
    });
  }

  onSubmit() {
    this.submited.emit(this.myForm.controls['inp'].value);
  }
}
