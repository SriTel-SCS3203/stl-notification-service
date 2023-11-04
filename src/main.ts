import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors) => {
        const result = errors.map((error) => {
          return {
            property: error.property,
            message: error.constraints
              ? (() => {
                  const messages = Object.values(error.constraints);
                  return messages;
                })()
              : ['Something went wrong'],
          };
        });
        return new BadRequestException({
          statusCode: 400,
          errorMessages: result,
          error: 'Bad Request',
        });
      },
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('Notification-Service API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
