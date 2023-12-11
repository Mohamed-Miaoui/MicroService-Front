// notification.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Notification } from '../models/notification/notification'; // Import your Notification model

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    private apiUrl = 'http://localhost:8081'; // Replace with your API base URL

    constructor(private http: HttpClient) {}

    getNotificationById(id: number): Observable<Notification> {
        const url = `${this.apiUrl}/Notification/get/${id}`;

        return this.http.get<Notification>(url)
            .pipe(
                catchError(this.handleError)
            );
    }

    // Add other methods for CRUD operations if needed

    private handleError(error: any) {
        console.error('API error', error);
        return throwError(error);
    }

    getNotificationsByUserId(userId: number): Observable<Notification[]> {
        const url = `${this.apiUrl}/Notification/getMesNotifications/${userId}`;

        return this.http.get<Notification[]>(url)
            .pipe(
                catchError(this.handleError)
            );
    }

}
