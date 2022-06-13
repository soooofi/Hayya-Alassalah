import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from '../app-routing.module';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule,
      ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  it('should create form on init', () => {
    component.ngOnInit();

    expect(component.form).not.toBeUndefined;
})

it('should go to home page on login', () => {
  spyOn(router,'navigate');

component.login();

  expect(router.navigate).toHaveBeenCalledWith(['home']);
})
  
  it('should go to signup page on signup', () => {
    spyOn(router,'navigate');

  component.signup();

    expect(router.navigate).toHaveBeenCalledWith(['signup']);
  })
});
