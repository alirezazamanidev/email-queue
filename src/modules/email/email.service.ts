import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { EMAIL_QUEUE } from './constants';
import { Queue } from 'bullmq';

@Injectable()
export class EmailService {

    constructor(@InjectQueue(EMAIL_QUEUE) private emailQueue:Queue){}


    async sendEmail(email:string,content:string,delay=0){

        await this.emailQueue.add('send_email',{email,content},{
            delay,
            attempts:3,
            backoff:{type:'exponential',delay:3000},
            removeOnComplete:true
        })
    }
}
