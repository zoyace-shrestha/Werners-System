import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Announcement, blankAnnouncement } from '../announcement';
import { BannerService } from '../banner.service';

@Component({
  selector: 'app-update-announcement',
  templateUrl: './update-announcement.component.html',
  styleUrls: ['./update-announcement.component.css']
})
export class UpdateAnnouncementComponent implements OnInit {

  announcement: Announcement = blankAnnouncement(0);

  id: number = 0;

  constructor(private bannerService: BannerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') ?? "0");
    this.bannerService.getAnnouncementById(this.id).subscribe(result => this.announcement = result);
  }
}
