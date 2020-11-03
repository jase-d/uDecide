const pgp = require('pg-promise')();
pgp.pg.defaults.max = 20;
const db = pgp(`postgres://jase:keeppushing@localhost:5432/udecide`);
export default async function handler (req, res) {
  if (req.method === 'GET') {
    const userInfo = await db.query(`SELECT * FROM settlit WHERE username = 'notjase' AND password = 'keeppushing';`);
    const tasks = await db.query(`SELECT * FROM settlit_tasks WHERE user_id = ${userInfo[0].user_id}`);
    res.send([userInfo[0], tasks]);
  } else if (req.method === 'POST') {
  };
};
