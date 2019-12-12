import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalPComponent } from './portal-p.component';

describe('PortalPComponent', () => {
  let component: PortalPComponent;
  let fixture: ComponentFixture<PortalPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
