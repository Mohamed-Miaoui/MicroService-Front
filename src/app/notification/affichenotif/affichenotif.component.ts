// affichenotif.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../services/notification.service';
import { Notification } from '../../models/notification/notification';

@Component({
  selector: 'app-affichenotif',
  templateUrl: './affichenotif.component.html',
  styleUrls: ['./affichenotif.component.css']
})
export class AffichenotifComponent implements OnInit {

  notification: Notification | undefined;
  notificationId: number | undefined;

  constructor(
      private notificationService: NotificationService,
      private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Get the notification id from the route parameter
    this.route.paramMap.subscribe(params => {
      this.notificationId = Number(params.get('id'));
    });

    // Call the service method to get the notification by id
    if (this.notificationId) {
      this.notificationService.getNotificationById(this.notificationId)
          .subscribe(
              notification => {
                this.notification = notification;
              },
              error => {
                console.error('Error fetching notification:', error);
              }
          );
    }
  }
}
