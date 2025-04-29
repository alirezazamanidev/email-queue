import { Injectable } from '@nestjs/common';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { EmailService } from '../email/email.service';

@Injectable()
export class CampaignService {
  constructor(private emailService: EmailService) {}
  async createCampaign(dto: CreateCampaignDto) {
    const { content, emails, delay } = dto;
    for (const email of emails) {
      await this.emailService.sendEmail(email, content, delay);
    }

    return { message: 'Campaign scheduled.' };
  }
}
