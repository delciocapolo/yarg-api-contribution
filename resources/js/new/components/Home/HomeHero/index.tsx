import React from 'react';

import styles from "./hero.module.css";
import Header from '@/new/components/Header';
import { Github } from '@/new/components/Icons';
import Button from '@/new/components/Button';

const HomeHero: React.FC = () => {
  return <div className={styles.hero}>
    <Header mode="transparent"/>
    
    <div className={styles.title}>
      <div className={styles.titleStatic}>Play on</div>
      <div className={styles.instrumentSection}>Pro Guitar</div>
    </div>

    <div className={styles.buttons}>
      <Button color="blue">
        Download
      </Button>

      <Button>
        <Github />
        Check our Repository
      </Button>
    </div>

    <div className={styles.video}>
      <div className={styles.gem} data-color="green"></div>
      <div className={styles.gem} data-color="blue"></div>
    </div>

  </div>;
}

export default HomeHero;