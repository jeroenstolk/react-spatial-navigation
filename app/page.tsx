"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { init } from '@noriginmedia/norigin-spatial-navigation';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';

init({});


export default function Home() {


  function Button() {
    const { ref, focused } = useFocusable();
  
    return (<div ref={ref} className={focused ? 'button-focused' : 'button'}>
      Press me
    </div>);
  }
  

  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <Button />
        <ol>
          <li>
            Get started by editing <code>app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
      </main>
    </div>
  );
}
