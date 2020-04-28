import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageExpencesComponent } from './manage-expences.component';

describe('ManageExpencesComponent', () => {
  let component: ManageExpencesComponent;
  let fixture: ComponentFixture<ManageExpencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageExpencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageExpencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
