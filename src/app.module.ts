import { Module } from '@nestjs/common';
import { CampaignModule } from './modules/campaign/campaign.module';
import { EmailModule } from './modules/email/email.module';

@Module({
  imports: [CampaignModule, EmailModule],
  
})
export class AppModule {}
