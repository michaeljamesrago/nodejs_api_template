import 'dotenv/config';

import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: process.env.PGUSER,
    database: process.env.DATABASE,
    password: process.env.PGPASSWORD,
    port: 5432,
    host: 'localhost'
});

export default pool;