import es from '@/data/menu-es.json';
import en from '@/data/menu-en.json';
import { IncomingMessage, ServerResponse } from 'http';

export default defineEventHandler(({ req: IncomingMessage, res: ServerResponse }) => {
  return { es, en };
});
