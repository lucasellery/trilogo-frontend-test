import React, { useContext, useRef } from 'react';
import styles from './styles.module.css';

import { useDrag, useDrop } from 'react-dnd';

import Ticket from '../Ticket';

import { Col, Typography, Layout } from 'antd';
import BoardContext from '../../context/BoardContext';
import TicketContext from '../../context/TicketContext';

const { Header } = Layout;
const { Text } = Typography;

function List({ headerTitle, headerColor, data , index: listIndex}) {
  const ref = useRef();
  const { move, listHead } = useContext(BoardContext);
  const { newItem } = useContext(TicketContext);

  const [{ isDragging }, dragRef] = useDrag({
    type: "COLUMN",
    item: { listIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  })

  const [, dropRef] = useDrop({
    accept: "COLUMN",
    async hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = listHead;

      if (draggedIndex === targetIndex && draggedListIndex === targetListIndex)
        return;

      const targetSize = ref?.current?.getBoundingClientRect();
      const targetCenter = (targetSize?.bottom - targetSize?.top) / 2;

      const draggedOffset = monitor?.getClientOffset();
      const draggedTop = draggedOffset?.y - targetSize?.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) return;

      if (draggedIndex > targetIndex && draggedTop > targetCenter) return;

      move(draggedListIndex, targetListIndex, draggedIndex, targetCenter);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    }
  });

  dragRef(dropRef(ref));

  return (
    <div ref={ref}>
      <Col className={styles.container}>
        <div className={styles.header} style={{ background: headerColor }}>
          <Text className={styles.label}>{headerTitle}</Text>
        </div>
        <ul className={styles.cardsContainer}>
          {data?.cards?.map((card, index) => (
            <Ticket
              key={card.id}
              index={index}
              listIndex={listIndex}
              data={card}
            />
          ))}
        </ul>
      </Col>
    </div>
  );
}

export default List;