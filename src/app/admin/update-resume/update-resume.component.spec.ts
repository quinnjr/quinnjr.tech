import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateResumeComponent } from './update-resume.component';

describe('UpdateResumeComponent', () => {
  let component: UpdateResumeComponent;
  let fixture: ComponentFixture<UpdateResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
