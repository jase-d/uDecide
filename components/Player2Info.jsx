import React from 'react';
import styles from '../styles/settl.module.css';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime)

const Player2Info = ({info}) => {
  const player = {
    username: info[0].username || 'user',
    wins: 371,
    rating: 3.7,
    failedPromise: 93,
    todos: info[1] || [{}]
  }

  return (
    <div className={styles.info}>
      <div className={styles.userInfo}>
        <div className={styles.username}>{player.username}</div>
          <div className={styles.userBar}>
            <span>&#10003; {player.wins}</span>
            <span>&#9733; {player.rating}</span>
            <span>&#x26A0; {player.failedPromise}</span>
          </div>
      </div>
      <span className={styles.todoCount}>{player.todos.length} To Do's</span>
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

export default Player2Info;



// import React from 'react';
// import styles from '../styles/settl.module.css';

// const Player2Info = () => {

//   const player = {
//     username: 'anon',
//     wins: 101076,
//     rating: 11.5,
//     todos: [{todo: 'Has to wash the dishes', from: 'notjase'}, {todo: 'He owes me a back massage!', from: 'notjase'}, {todo: 'KEEPBEINGAMAZING', from: 'anon'}]
//   }

//   return (
//     <div className={styles.info}>
//       <div>Username
//         <div>{player.username}</div>
//       </div>
//       <div>Wins
//         <div>{player.wins}</div>
//       </div>
//       <div>Rating
//         <div>&#9733;{player.rating}</div>
//       </div>
//       <div>To Do's
//         {player.todos.map((task, i) => {
//           return (
//           <div className={styles.todos} key={i}>
//             <div>{task.todo}</div>
//             <div>-{task.from}</div>
//           </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// };

// export default Player2Info;

