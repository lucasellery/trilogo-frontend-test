import React, { useRef, useState, useContext } from "react";

import styles from "./styles.module.css";

import BoardContext from "../../context/BoardContext";
import RegisterTicketModal from "../RegisterTicketModal";

// import {ReactComponent as MoreIcon} from '../../assets/images/mdi_more_horiz.svg'
import { EllipsisOutlined } from "@ant-design/icons";

import image from "../../assets/images/picture.png";

import { Card, Menu } from "antd";
import { useSelector } from "react-redux";
import { useDrag, useDrop } from "react-dnd";

const { SubMenu } = Menu;

function Ticket({ data, index, listIndex }) {
  // const ticketInfo = useSelector(state => state.tickets)
  const { move } = useContext(BoardContext);

  const ref = useRef();
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

  const [openModal, setOpenModal] = useState(false);

  function showModal() {
    setOpenModal(true);
  }

  function handleCancel() {
    setOpenModal(false);
  }

  function onChangeType() {}

  function onSubmitNewTicket() {
    setOpenModal(false);
  }

  return (
    <div ref={ref} className={isDragging ? styles.isDragging : undefined}>
      <Card size="small" className={styles.card}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={data.image} alt="" />
        </div>

        <p className={styles.status}>{data.type}</p>
        <p className={styles.number}>{data.id}</p>
        <p className={styles.description}>{data.description}</p>

        <div className={styles.bottom}>
          <p>{data.user}</p>
          {/* <p>{ticketInfo}</p> */}
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
        onChangeType={onChangeType}
        onSubmitNewTicket={onSubmitNewTicket}
        title="Editar ticket"
      />
    </div>
  );
}

export default Ticket;
