import { Pool } from 'pg';
 
let pool: Pool;

function getInstance() {
  if (!pool) {
    pool = new Pool();
    pool.on('error', error => {
      console.error("Database Pool Error Occured. Attempting to restart Connection.", error);
      try {
        pool.end();
        pool = new Pool();
      }
      catch (error) {
        console.error("Database Pool Error Occured Again.", error);
      }
    });
  }
  return pool;
}

export default getInstance;
