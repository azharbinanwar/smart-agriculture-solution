import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PesticidesPage } from './pesticides.page';

describe('PesticidesPage', () => {
  let component: PesticidesPage;
  let fixture: ComponentFixture<PesticidesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesticidesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PesticidesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
