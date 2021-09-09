import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeComponent } from './resume.component';
import { SidebarComponent } from './sidebar/sidebar.component';

describe('ResumeComponent', () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeComponent, SidebarComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
