import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ErrorComponent } from './error.component';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should show error message on field touched and error present', () => {
    component.field = new FormGroup({anyField: new  FormControl()});

    component.field.markAsTouched();
    component.field.setErrors({anyError: true});
    component.error= "anyError"
    expect(component.shouldShowComponent()).toBeTruthy();
  });

  /*it('should show error message on field touched and error present', () => {
    component.field = new FormGroup({email: new  FormControl()});

    component.field.markAsTouched();
    component.field.setErrors({email: true});
    component.error = "email";
    expect(component.shouldShowComponent()).toBeTruthy();
  }); */

  it('should hide error message on field not touched', () => {
    component.field = new FormGroup({anyField: new  FormControl()});

    component.field.markAsTouched();
    component.field.setErrors({anyError: true});
    component.error= "anyError"
    expect(component.shouldShowComponent()).toBeFalsy();
  })

  it('should hide error message on field touched and has error, but', () => {
    component.field = new FormGroup({anyField: new  FormControl()});
    component.field.markAsTouched();
    component.field.setErrors({anyError: true});
    component.error= "anyError"
    expect(component.shouldShowComponent()).toBeFalsy();
  })


});
