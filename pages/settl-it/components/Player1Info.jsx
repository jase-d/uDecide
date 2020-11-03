import React from 'react';
import styles from '../styles/settl.module.css';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime)

const Player1Info = ({info}) => {
  const player = {
    username: info[0].username,
    wins: 1076,
    rating: 10.5,
    todos: info[1]
  }

  return (
    <div className={styles.info}>
        <div>{player.username}</div>
      <div>Wins
        <div>{player.wins}</div>
      </div>
      <div>Rating
        <div>&#9733;{player.rating}</div>
      </div>
      <div>To Do's
        {player.todos.map((task, i) => {
          return (
          <div className={styles.todos} key={i}>
            <div>{task.task} {dayjs(task.finishby).fromNow()}</div>
            <div>-{task.iou}</div>
          </div>
          )
        })}
      </div>
    </div>
  );
};

export default Player1Info;

