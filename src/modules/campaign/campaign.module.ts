import { Module } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { CampaignController } from './campaign.controller';
import { EmailModule } from '../email/email.module';

@Module({
  imports:[EmailModule],
  controllers: [CampaignController],
  providers: [CampaignService],
})
export class CampaignModule {}
