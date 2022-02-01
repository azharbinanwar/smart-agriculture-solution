import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TreatmentPage } from './treatment.page';

describe('TreatmentPage', () => {
  let component: TreatmentPage;
  let fixture: ComponentFixture<TreatmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreatmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TreatmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
