import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child4sharedserviceComponent } from './child4sharedservice.component';

describe('Child4sharedserviceComponent', () => {
  let component: Child4sharedserviceComponent;
  let fixture: ComponentFixture<Child4sharedserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Child4sharedserviceComponent]
    });
    fixture = TestBed.createComponent(Child4sharedserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
