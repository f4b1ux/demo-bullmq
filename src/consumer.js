import Redis from 'ioredis';
import {Worker} from "bullmq";

const connection = new Redis('redis://localhost:6379/0', { maxRetriesPerRequest: null });

const worker = new Worker('my-queue', async ({name, data}) => console.log(`Received ${name} message: ${data}`), { connection, concurrency: 1});
worker.on('error', console.error);