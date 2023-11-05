import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { WebpushnotificationService } from './webpushnotification.service';
import { WebPushNotificationDto } from './dto/webpushnotification.dto';
import { ApiBody, ApiConsumes, ApiOperation } from '@nestjs/swagger';
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
    type: WebPushNotificationDto,
    required: true,
    isArray: true,
  })
  sendMultipleNotifications(
    @Body() notifications: WebPushNotificationBatchDto,
  ) {
    return this.webpushnotificationService.sendMultipleNotifications(
      notifications,
    );
  }
}
