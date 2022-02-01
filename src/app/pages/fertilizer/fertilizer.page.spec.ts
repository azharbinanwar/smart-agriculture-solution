import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FertilizerPage } from './fertilizer.page';

describe('FertilizerPage', () => {
  let component: FertilizerPage;
  let fixture: ComponentFixture<FertilizerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FertilizerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FertilizerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
