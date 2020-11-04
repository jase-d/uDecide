CREATE TABLE settl_it (
  user_id serial PRIMARY KEY,
  username VARCHAR(100) UNIQUE,
  password VARCHAR(20),
  wins INT DEFAULT 0,
  rating REAL,
  fails INT DEFAULT 0
);

INSERT INTO settl_it (username, password)
VALUES ('notjase', 'keeppushing');

INSERT INTO settl_it (username, password)
VALUES ('anon', 'dontkeeppushing');

CREATE TABLE settlit_tasks (
  id serial PRIMARY KEY,
  user_id INT,
  task VARCHAR(200) NOT NULL,
  finishby TIMESTAMP WITHOUT TIME ZONE NOT NULL,
  iou VARCHAR (100),
  CONSTRAINT get_tasks
    FOREIGN KEY (user_id)
      REFERENCES settl_it (user_id)
);


INSERT INTO settlit_tasks (user_id, task, finishby, iou)
VALUES (1, 'Finish my toy problems', '11/13/2020 9:19 PM', 'hr_community');

INSERT INTO settlit_tasks (user_id, task, finishby, iou)
VALUES (2, 'do something I would not normally do', '11/13/2020 9:19 PM', 'hrcommunity');

SELECT * FROM settlit, settlit_tasks
WHERE settlit.user_id = 1 AND settlit_tasks.user_id = 1;