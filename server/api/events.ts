import events from '@/data/events.json';
import { IncomingMessage, ServerResponse } from 'http';

export default defineEventHandler(({ req: IncomingMessage, res: ServerResponse }) => {
  return { events };
});
