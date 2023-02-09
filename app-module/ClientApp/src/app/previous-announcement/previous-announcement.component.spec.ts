import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousAnnouncementComponent } from './previous-announcement.component';

describe('PreviousAnnouncementComponent', () => {
  let component: PreviousAnnouncementComponent;
  let fixture: ComponentFixture<PreviousAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousAnnouncementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
