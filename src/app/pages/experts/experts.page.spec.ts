import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpertsPage } from './experts.page';

describe('ExpertsPage', () => {
  let component: ExpertsPage;
  let fixture: ComponentFixture<ExpertsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpertsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
