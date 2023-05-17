import React from 'react';
import styles from './Layout.module.scss';
import { Logo, Button, Footer } from '../../components';
import { useRouter } from 'next/router';

const Layout = ({ headerContent, bodyContent, modal = false, modalContent }) => {
  const router = useRouter();
  return (
    <div className={`${styles.wrapper} ${ modal ? styles.open : ''}`}>
      <div className={styles.header}>
        <Logo classNames={styles.logo}/>
        <Button buttonName="+ ADD MOVIE" classList={["button-grey", styles.button]} onClick={() => router.push('/new')} />
        {headerContent}
      </div>
      {bodyContent}
      <Footer />
      {modal ? modalContent : null}
    </div>
  );
};

export default Layout;
