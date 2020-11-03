import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <h1>uDecide</h1>
      <Link href="/settl-it/app">
        <a>
          <h3>Settl-it</h3>
        </a>
      </Link>
    </>
  );
};