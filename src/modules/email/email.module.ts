import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { BullModule } from '@nestjs/bullmq';
import { redisConfig } from 'src/config/redis.config';
import { EMAIL_QUEUE } from './constants';
import { EmailProcessor } from './email.processor';

@Module({
  imports:[
    BullModule.registerQueue({
      name:EMAIL_QUEUE,
      connection:redisConfig
    })
  ],
  controllers: [EmailController],
  providers: [EmailService,EmailProcessor],
  exports:[EmailService]
})
export class EmailModule {}
