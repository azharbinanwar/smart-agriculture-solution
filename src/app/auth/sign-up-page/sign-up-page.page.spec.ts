import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignUpPagePage } from './sign-up-page.page';

describe('SignUpPagePage', () => {
  let component: SignUpPagePage;
  let fixture: ComponentFixture<SignUpPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
