import React, { useState } from 'react';
import List from '../List'
import BoardContext from '../../context/BoardContext';
import produce from 'immer';

import { Row, Col, Divider } from 'antd';

import { loadLists } from '../../services/api';

const data = loadLists();

function Board() {
  const [lists, setLists] = useState(data);

  function move(fromList, toList, from, to) {
    setLists(produce(lists, draft => {
      const dragged = draft[fromList].cards[from];

      draft[fromList].cards.splice(from, 1)
      draft[toList].cards.splice(to, 0, dragged);
    }))
  }

  return (
    <div>
      <BoardContext.Provider value={{ lists, move }}>
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
      </BoardContext.Provider>
    </div>
  );
}

export default Board;