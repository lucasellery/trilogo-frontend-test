import React from 'react';
import List from '../List'

import { Row, Col, Divider } from 'antd';

function Board() {
  return (
    <div>
      <Row gutter={15} justify="center" align="middle">
        <List headerTitle="Abertos" headerColor="rgba(245, 34, 45, 0.25)" />
        <List headerTitle="Executados" headerColor="rgba(212, 102, 45, 0.25)" />
        <List headerTitle="Vistoriados" headerColor="rgba(82, 196, 26, 0.25)" />
        <List headerTitle="Arquivados" headerColor="rgba(193, 185, 185, 0.25)" />
      </Row>
    </div>
  );
}

export default Board;