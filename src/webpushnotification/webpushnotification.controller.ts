import {
  Body,
  Controller,
  Delete,
  HttpCode,
  Param,
  Post,
} from '@nestjs/common';
import { WebpushnotificationService } from './webpushnotification.service';
import { WebPushNotificationDto } from './dto/webpushnotification.dto';
import {
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiParam,
  ApiResponse,
} from '@nestjs/swagger';
import { WebPushNotificationBatchDto } from './dto/webpushnotificationbatch.dto';

@Controller('webpushnotification')
export class WebpushnotificationController {
  constructor(
    private readonly webpushnotificationService: WebpushnotificationService,
  ) {}
  @Post('send/single')
  @HttpCode(200)
  @ApiConsumes('application/json')
  @ApiOperation({ summary: 'Send a single notification to all users' })
  @ApiBody({
    type: WebPushNotificationDto,
    required: true,
    isArray: false,
  })
  @ApiResponse({
    status: 200,
    description: 'Notification sent successfully',
  })
  sendNotification(@Body() notification: WebPushNotificationDto) {
    return this.webpushnotificationService.sendNotificationToAllUsers(
      notification,
    );
  }
  @Post('send/multiple')
  @HttpCode(200)
  @ApiConsumes('application/json')
  @ApiOperation({ summary: 'Send multiple notifications to all users' })
  @ApiBody({
    type: WebPushNotificationBatchDto,
    required: true,
    isArray: true,
  })
  @ApiResponse({
    status: 200,
    description: 'All notifications sent successfully',
  })
  sendMultipleNotifications(
    @Body() notifications: WebPushNotificationBatchDto,
  ) {
    return this.webpushnotificationService.sendMultipleNotifications(
      notifications,
    );
  }
  @Post('send/single/:user_id')
  @HttpCode(200)
  @ApiConsumes('application/json')
  @ApiOperation({ summary: 'Send a single notification to a user' })
  @ApiParam({
    name: 'user_id',
    required: true,
    description: 'The id of the user to send the notification to',
  })
  @ApiBody({
    type: WebPushNotificationDto,
    required: true,
    isArray: false,
  })
  @ApiResponse({
    status: 200,
    description: 'Notification sent successfully',
  })
  sendNotificationToUser(
    @Param('user_id') user_id: string,
    @Body() notification: WebPushNotificationDto,
  ) {
    return this.webpushnotificationService.sendNotificationToAUser(
      notification,
      user_id,
    );
  }
  @Delete('cancel/:notification_id')
  @HttpCode(200)
  @ApiConsumes('application/json')
  @ApiOperation({ summary: 'Cancel a notification by id' })
  @ApiParam({
    name: 'notification_id',
    required: true,
    description: 'The id of the notification to delete',
  })
  @ApiResponse({
    status: 200,
    description: 'Notification deleted successfully',
  })
  deleteNotification(@Param('notification_id') notification_id: string) {
    return this.webpushnotificationService.deleteANotification(notification_id);
  }
}
