import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { SignupPage } from './signup.page';

describe('SignupPage', () => {
  let component: SignupPage;
  let fixture: ComponentFixture<SignupPage>;
  let router: Router;

  
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupPage ],
      imports: [IonicModule.forRoot(),
        ReactiveFormsModule,
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupPage);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create form on init', () => {
    component.ngOnInit();

    expect(component.form).not.toBeUndefined;
})

  it('should go to home page on signup', () => {
    spyOn(router,'navigate');
    component.signup();
    expect(router.navigate).toHaveBeenCalledWith((['home']));
  });
});
