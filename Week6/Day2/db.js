require('dotenv').config();
const pg = require('pg');

// use pg package to connect to postgres database
const pool = new pg.Pool({
    user: process.env.PGUSER || 'restaurant_db',
    host: process.env.PGHOST || 'localhost',
    database: process.env.PGDATABASE || 'restaurant_db',
    password: process.env.PGPASSWORD ,
    port: process.env.PGPORT || 5432,
});
module.exports = pool;
