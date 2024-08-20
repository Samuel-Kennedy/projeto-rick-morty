import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioRickComponent } from './inicio-rick.component';

describe('InicioRickComponent', () => {
  let component: InicioRickComponent;
  let fixture: ComponentFixture<InicioRickComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioRickComponent]
    });
    fixture = TestBed.createComponent(InicioRickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
