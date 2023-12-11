import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import {Notification} from "../models/notification/notification";
import {Router} from "@angular/router";

// Adjust the import path

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  notifications: Notification[] = []; // Assuming Notification is your model

  constructor(private notificationService: NotificationService , private router: Router) {}

  ngOnInit(): void {
    // Assuming you have the user's ID, replace '1' with the actual user ID
    this.loadNotifications(1);
  }

  loadNotifications(userId: number): void {
    this.notificationService.getNotificationsByUserId(userId)
        .subscribe(
            (notifications: Notification[]) => {
              this.notifications = notifications;
            },
            (error) => {
              console.error('Error loading notifications:', error);
              // Handle error as needed
            }
        );
  }

    openNotification(notification: Notification) {
        // Navigate to AffichenotifComponent and pass the notification data
        this.router.navigate(['/affichenotif', notification.idNotification]);
    }
}
