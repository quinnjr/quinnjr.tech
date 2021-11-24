import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { FlashMessageModule } from '../flash-message/flash-message.module';

import { ResumeComponent } from './resume.component';
import { SidebarComponent } from './sidebar/sidebar.component';

describe('ResumeComponent', () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeComponent, SidebarComponent /*, FlashMessageModule*/]
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
