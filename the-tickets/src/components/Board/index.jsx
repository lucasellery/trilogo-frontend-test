import React, { useState } from 'react';
import List from '../List'

import { Row, Col, Divider } from 'antd';

import { loadLists } from '../../services/api';

const data = loadLists();

function Board() {
  const [lists, setLists] = useState(data);

  return (
    <div>
      <Row gutter={15} justify="center" align="middle">
        {lists.map((list, index) => (
          <List
            key={list.title}
            index={index}
            data={list}
            headerTitle={list.title}
            headerColor={list.headerColor}
          />
        ))}
      </Row>
    </div>
  );
}

export default Board;