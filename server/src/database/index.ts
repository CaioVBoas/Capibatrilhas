import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: process.env.NODE_ENV !== 'production' ? ['warn', 'error'] : [],
  errorFormat: process.env.NODE_ENV !== 'production' ? 'pretty' : 'colorless',
});

prisma
  .$connect()
  .then(() => {
    console.log('📦 Successfully connected with database');
  })
  .catch((error: any) => {
    console.log('❌ Error connecting to database', error);
  });

export default prisma;
