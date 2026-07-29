import { drizzle } from 'drizzle-orm/node-postgres';
import pkg from 'pg';
const { Client } = pkg;
import { migrate } from 'drizzle-orm/node-postgres/migrator';

const client = new Client({
  connectionString: 'postgresql://postgres:postgres@localhost:5433/mydb',
});

async function run() {
  try {
    await client.connect();
    console.log('Connected to DB');
    const db = drizzle(client);
    console.log('Running migrations...');
    await migrate(db, { migrationsFolder: './drizzle' });
    console.log('Migrations complete');
  } catch (err) {
    console.error('Migration failed:', err);
  } finally {
    await client.end();
  }
}
run();
