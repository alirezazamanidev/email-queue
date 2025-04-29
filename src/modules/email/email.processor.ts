import {  Processor, WorkerHost } from '@nestjs/bullmq';
import { EMAIL_QUEUE } from "./constants"
import { Job } from "bullmq";
interface sendEmailDto{
    email:string
    content:string
}
@Processor(EMAIL_QUEUE)
export class EmailProcessor extends WorkerHost{

    async process(job: Job, token?: string): Promise<any> {
        const {name,data}=job;
        switch (name) {
            case 'send_email':
                await this.sendEmail(data);
                break;
        
            default:
                break;
        }
    }
    async sendEmail(dto:sendEmailDto){
        const { email, content } = dto
        console.log(`📨 Sending email to ${email}`);
        await new Promise((res) => setTimeout(res, 2000));
        console.log(`✅ Email sent to ${email}`);
    }
}