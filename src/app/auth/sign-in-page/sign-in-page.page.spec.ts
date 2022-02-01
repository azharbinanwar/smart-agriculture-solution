import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignInPagePage } from './sign-in-page.page';

describe('SignInPagePage', () => {
  let component: SignInPagePage;
  let fixture: ComponentFixture<SignInPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignInPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
