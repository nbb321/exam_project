import React from 'react';
import { connect } from 'dva';
import styles from './index.scss';
function IndexPage() {
  return (
   <div className={styles.boxs}>
       home
   </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
