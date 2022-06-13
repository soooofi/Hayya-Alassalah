import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from '../app-routing.module';

import { TimingsPage } from './timings.page';

describe('TimingsPage', () => {
  let component: TimingsPage;
  let fixture: ComponentFixture<TimingsPage>;
  let router : Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TimingsPage ],
      imports: [IonicModule.forRoot(),
      AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TimingsPage);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should go to monthly page on See Monthly', () => {
    spyOn(router,'navigate');

  component.monthly();

    expect(router.navigate).toHaveBeenCalledWith(['monthly']);
  })
});
