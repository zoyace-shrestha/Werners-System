import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Announcement, blankAnnouncement } from '../announcement';
import { BannerService } from '../banner.service';
import { toast } from '../toasthelper';

@Component({
  selector: 'app-previous-announcement',
  templateUrl: './previous-announcement.component.html',
  styleUrls: ['./previous-announcement.component.css']
})
export class PreviousAnnouncementComponent implements OnInit {

  announcement: Announcement = blankAnnouncement(0);

  id: number = 0;

  constructor(private bannerService: BannerService, private route: ActivatedRoute, private toastController: ToastController) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') ?? "0");
    this.bannerService.getAnnouncementById(this.id).subscribe({next: result => this.announcement = result, 
      error: () => toast('danger', 'Failed to retrieve existing announcement', this.toastController)});
  }
}
