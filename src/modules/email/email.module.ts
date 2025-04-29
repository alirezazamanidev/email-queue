import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { BullModule } from '@nestjs/bullmq';
import { redisConfig } from 'src/config/redis.config';
import { EMAIL_QUEUE } from './constants';

@Module({
  imports:[
    BullModule.registerQueue({
      name:EMAIL_QUEUE,
      connection:redisConfig
    })
  ],
  controllers: [EmailController],
  providers: [EmailService],
  exports:[EmailService]
})
export class EmailModule {}
