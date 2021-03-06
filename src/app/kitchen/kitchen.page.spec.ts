import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KitchenPage } from './kitchen.page';

describe('KitchenPage', () => {
  let component: KitchenPage;
  let fixture: ComponentFixture<KitchenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KitchenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
