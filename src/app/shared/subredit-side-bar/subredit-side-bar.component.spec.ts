import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubreditSideBarComponent } from './subredit-side-bar.component';

describe('SubreditSideBarComponent', () => {
  let component: SubreditSideBarComponent;
  let fixture: ComponentFixture<SubreditSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubreditSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubreditSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
