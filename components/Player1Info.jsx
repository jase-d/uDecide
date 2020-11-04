import React from 'react';
import styles from '../styles/settl.module.css';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime)

const Player1Info = ({info}) => {
  const player = {
    username: info[0].username || 'anon',
    wins: 1076,
    rating: 10.5,
    todos: info[1] || [{}]
  }

  return (
    <div className={styles.info}>
      <div className={styles.userInfo}>
        <div className={styles.username}>{player.username}</div>
          <div className={styles.userBar}>
            <span>&#10003; {player.wins}</span>
            <span>&#9733; {player.rating}</span>
            <span>&#x26A0; 10</span>
          </div>
      </div>
      <span className={styles.todoCount}>- {player.todos.length} To Do's -</span>
      <div className={styles.todoContainer}>
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

