import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { WebPushNotificationDto } from './dto/webpushnotification.dto';
import { WebPushNotificationBatchDto } from './dto/webpushnotificationbatch.dto';

@Injectable()
export class WebpushnotificationService {
  sendNotificationToAllUsers(notification: WebPushNotificationDto) {
    if (this.generateResult()) {
      return { message: 'Notification sent successfully' };
    } else {
      throw new InternalServerErrorException({
        message: 'Notification failed to send',
        notification,
      });
    }
  }
  sendMultipleNotifications(notifications: WebPushNotificationBatchDto) {
    const failedNotifications = [];
    notifications.notifications.forEach((notification) => {
      if (!this.generateResult()) {
        failedNotifications.push(notification);
      }
    });
    return failedNotifications.length > 0
      ? new InternalServerErrorException({
          message: 'Some notifications failed to send',
          failedNotifications,
        })
      : { message: 'All notifications sent successfully' };
  }

  generateResult() {
    if (Math.random() < 0.9) {
      return true;
    } else {
      return false;
    }
  }
}
