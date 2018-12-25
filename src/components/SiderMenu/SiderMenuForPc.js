import React, { PureComponent } from 'react';
import { Icon } from 'antd';
import styles from './index.less';

class CustomizeComponent extends PureComponent {
  render() {
    return (
      <div className={styles.parMenu}>
        <div className={`${styles.menuItem} ${styles.cur}`}>
          <span className={styles.IconCON}>
            <Icon type="copy" />
          </span>
          <a className={styles.link}>parMenu</a>
        </div>
        <div className={`${styles.menuItem}`}>
          <span className={styles.IconCON}>
            <Icon type="copy" />
          </span>
          <a className={styles.link}>parMenu</a>
        </div>
        <div className={`${styles.menuItem}`}>
          <span className={styles.IconCON}>
            <Icon type="copy" />
          </span>
          <a className={styles.link}>parMenu</a>
        </div>
        <div className={`${styles.menuItem}`}>
          <span className={styles.IconCON}>
            <Icon type="copy" />
          </span>
          <a className={styles.link}>parMenu</a>
        </div>
        <div className={`${styles.menuItem}`}>
          <span className={styles.IconCON}>
            <Icon type="copy" />
          </span>
          <a className={styles.link}>parMenu</a>
        </div>
        <div className={`${styles.menuItem}`}>
          <span className={styles.IconCON}>
            <Icon type="copy" />
          </span>
          <a className={styles.link}>parMenu</a>
        </div>
        <div className={`${styles.menuItem}`}>
          <span className={styles.IconCON}>
            <Icon type="copy" />
          </span>
          <a className={styles.link}>parMenu</a>
        </div>
        <div className={`${styles.menuItem}`}>
          <span className={styles.IconCON}>
            <Icon type="copy" />
          </span>
          <a className={styles.link}>parMenu</a>
        </div>
        <div className={`${styles.menuItem}`}>
          <span className={styles.IconCON}>
            <Icon type="copy" />
          </span>
          <a className={styles.link}>parMenu</a>
        </div>
        <div className={`${styles.menuItem}`}>
          <span className={styles.IconCON}>
            <Icon type="copy" />
          </span>
          <a className={styles.link}>parMenu</a>
        </div>
      </div>
    );
  }
}
export default CustomizeComponent;
