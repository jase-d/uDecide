import React from 'react';
import styles from '../styles/settl.module.css';

const Player1Info = () => {

  const player = {
    username: 'notjase',
    wins: 1076,
    rating: 10.5,
    todos: [{todo: 'Has to wash the dishes', from: 'GraceK0NG'}, {todo: 'He owes me a back massage!', from: 'GraceKONG'}, {todo: 'KICKSOMEASS', from: 'anon'}]
  }

  return (
    <div className={styles.info}>
      <div>Username
        <div>{player.username}</div>
      </div>
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
            <div>{task.todo}</div>
            <div>-{task.from}</div>
          </div>
          )
        })}
      </div>
    </div>
  )
};

export default Player1Info;

