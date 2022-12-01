import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementManagerComponent } from './announcement-manager.component';

describe('AnnouncementManagerComponent', () => {
  let component: AnnouncementManagerComponent;
  let fixture: ComponentFixture<AnnouncementManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnouncementManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnouncementManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
