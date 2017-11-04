import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedMenuItemComponent } from './selected-menu-item.component';

describe('SelectedMenuItemComponent', () => {
  let component: SelectedMenuItemComponent;
  let fixture: ComponentFixture<SelectedMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
