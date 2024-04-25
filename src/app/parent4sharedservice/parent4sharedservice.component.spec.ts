import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent4sharedserviceComponent } from './parent4sharedservice.component';

describe('Parent4sharedserviceComponent', () => {
  let component: Parent4sharedserviceComponent;
  let fixture: ComponentFixture<Parent4sharedserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Parent4sharedserviceComponent]
    });
    fixture = TestBed.createComponent(Parent4sharedserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
