import Redis from 'ioredis';
import {Queue} from "bullmq";

const connection = new Redis('redis://localhost:6379/0', { maxRetriesPerRequest: null });

const queue = new Queue('my-queue', { connection });

setInterval(async () => {
  await queue.add('message-name', 'Hello World!', { removeOnComplete: true});
  console.log('Message sent')
}, 3000)