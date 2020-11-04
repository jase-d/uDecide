import React from 'react';
import Link from 'next/link';
import styles from './home.module.css'

export default function HomePage() {
  return (
    <>
      <h1>uDecide</h1>
      <h3>CATEGORIES</h3>
      <hr></hr>
      <div>Who's going to do it?
        <hr></hr>
        <div className={styles.gameSelection}>
          <Link href="/settl-it/app">
            <a>
              <h3>Settl-it</h3>
            </a>
          </Link>
        </div>
      </div>
      <hr></hr>
      <div>Where to Eat?</div>
      <hr></hr>
      <div></div>
    </>
  );
};