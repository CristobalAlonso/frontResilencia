import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalAlumnosComponent } from './portal-alumnos.component';

describe('PortalAlumnosComponent', () => {
  let component: PortalAlumnosComponent;
  let fixture: ComponentFixture<PortalAlumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalAlumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
