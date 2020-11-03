CREATE TABLE settlit (
  user_id serial PRIMARY KEY,
  username VARCHAR(100),
  password VARCHAR(20)
);

INSERT INTO settlit (username, password)
VALUES ('notjase', 'keeppushing');

CREATE TABLE settlit_tasks (
  user_id INT,
  task VARCHAR(200) NOT NULL,
  finishby TIMESTAMP WITHOUT TIME ZONE NOT NULL PRIMARY KEY,
  iou VARCHAR (100),
  CONSTRAINT get_tasks
    FOREIGN KEY (user_id)
      REFERENCES settlit (user_id)
);


INSERT INTO settlit_tasks (user_id, task, finishby, iou)
VALUES (1, 'He owes me a back massage!', '11/10/2020 9:19 PM', 'notGrace')
ON CONFLICT DO NOTHING;


SELECT * FROM settlit, settlit_tasks
WHERE settlit.user_id = 1 AND settlit_tasks.user_id = 1;