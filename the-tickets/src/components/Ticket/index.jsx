import React from 'react';

import styles from './styles.module.css';
import { Card } from 'antd';

function Ticket() {
  return (
    <Card className={styles.card}>
      <div>
        <p className={styles.status}>Procedimento</p>
        <p>6523</p>
        <p>Consertar vazamento</p>

        <div className={styles.bottom}>
          <p>Yudi Tamashiro</p>
          <button>botão</button>
        </div>
      </div>
    </Card>
  );
}

export default Ticket;