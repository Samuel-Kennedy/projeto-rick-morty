import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRickComponent } from './header-rick.component';

describe('HeaderRickComponent', () => {
  let component: HeaderRickComponent;
  let fixture: ComponentFixture<HeaderRickComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderRickComponent]
    });
    fixture = TestBed.createComponent(HeaderRickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
