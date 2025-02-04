import React, { useRef, useState, useContext, useEffect } from "react";

import styles from "./styles.module.css";

import BoardContext from "../../context/BoardContext";
import TicketContext from "../../context/TicketContext";
import RegisterTicketModal from "../RegisterTicketModal";

import { EllipsisOutlined } from "@ant-design/icons";

import { Card, Menu } from "antd";
import { useDrag, useDrop } from "react-dnd";

const { SubMenu } = Menu;

function Ticket({ data, index, listIndex }) {
  const ref = useRef();
  const { move } = useContext(BoardContext);

  const [openModal, setOpenModal] = useState(false);

  const [{ isDragging }, dragRef] = useDrag({
    type: "CARD",
    item: { index, listIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "CARD",
    async hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if (draggedIndex === targetIndex && draggedListIndex === targetListIndex)
        return;

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) return;

      if (draggedIndex > targetIndex && draggedTop > targetCenter) return;

      move(draggedListIndex, targetListIndex, draggedIndex, targetCenter);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    },
  });

  dragRef(dropRef(ref));


  function showModal() {
    setOpenModal(true);
  }

  function handleCancel() {
    setOpenModal(false);
  }

  return (
    <div ref={ref} className={isDragging ? styles.isDragging : undefined}>
      <Card size="small" className={styles.card}>
        <div className={styles.imgContainer}>
          <img className={data.image ? styles.img : styles.imgHidden} src={data.image} alt="" />
        </div>

        <p className={styles.status}>{data.type}</p>
        <p className={styles.number}>{data.id}</p>
        <p className={styles.description}>{data.description}</p>

        <div className={styles.bottom}>
          <p>{data.user}</p>
          <Menu
            triggerSubMenuAction="click"
            expandIcon={
              <EllipsisOutlined style={{ fontSize: 32, color: "#8d89a5" }} />
            }
            className={styles.menu}
          >
            <SubMenu>
              <Menu.Item onClick={showModal}>Editar</Menu.Item>
              <Menu.Item>Excluir</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </Card>

      <RegisterTicketModal
        isModalVisible={openModal}
        handleCancel={handleCancel}
        title="Editar ticket"
      />
    </div>
  );
}

export default Ticket;
