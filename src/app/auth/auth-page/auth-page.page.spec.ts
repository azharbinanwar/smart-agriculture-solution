import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuthPagePage } from './auth-page.page';

describe('AuthPagePage', () => {
  let component: AuthPagePage;
  let fixture: ComponentFixture<AuthPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
