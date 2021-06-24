import React from 'react';
import styles from './styles.module.css';
import Ticket from '../Ticket';

import { Row, Col, Typography, Layout } from 'antd';

const { Header } = Layout;
const { Text } = Typography;

function List({ headerTitle, headerColor }) {
  return (
    <div>
      <Col className={styles.container}>
        <div className={styles.header} style={{ background: headerColor }}>
          <Text className={styles.label}>{headerTitle}</Text>
        </div>
        <ul className={styles.cardsContainer}>
          <Ticket />
        </ul>
      </Col>
    </div>
  );
}

export default List;