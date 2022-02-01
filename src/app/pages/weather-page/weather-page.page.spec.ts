import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeatherPagePage } from './weather-page.page';

describe('WeatherPagePage', () => {
  let component: WeatherPagePage;
  let fixture: ComponentFixture<WeatherPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
