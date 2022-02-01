import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsPagePage } from './news-page.page';

describe('NewsPagePage', () => {
  let component: NewsPagePage;
  let fixture: ComponentFixture<NewsPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
