const pgp = require('pg-promise')();
pgp.pg.defaults.max = 20;
console.log(process.env)
const db = pgp(`postgres://${process.env.SETTLIT_USER}:${process.env.SETTLIT_PWD}@${process.env.U_DECIDE_IP}/u_decide`);
// need to set up connection without local host
export default async function handler (req, res) {
  if (req.method === 'GET') {
    const api = req.query.info.split('-')
    console.log(api, req.body)
    const userInfo = await db.query(`SELECT * FROM settl_it WHERE username = '${api[0]}' AND password = '${api[1]}';`);
    if (userInfo.length === 0) {
      res.send('login-error')
    } else {
      const tasks = await db.query(`SELECT * FROM settlit_tasks WHERE user_id = ${userInfo[0].user_id}`);
      res.send([userInfo[0], tasks])
    }
  } else if (req.method === 'POST') {
    const api = req.body.body;
    console.log(api)
    const confirm = await db.query(`INSERT INTO settlit_tasks (user_id, task, finishby, iou)
                                    VALUES (${api.user_id}, $$${api.task}$$, '${api.finishby}', '${api.iou}');`);
    res.send(confirm)
  };
};
