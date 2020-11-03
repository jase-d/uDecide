import React from 'react';
import styles from '../styles/settl.module.css';

const Player2Info = () => {

  const player = {
    username: 'notGrace',
    wins: 101076,
    rating: 11.5,
    todos: [{todo: 'Has to wash the dishes', from: 'notjase'}, {todo: 'He owes me a back massage!', from: 'notjase'}, {todo: 'KEEPBEINGAMAZING', from: 'anon'}]
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

export default Player2Info;

