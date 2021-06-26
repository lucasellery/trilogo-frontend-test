import React, { useEffect, useState } from 'react';

import styles from './styles.module.css';

import RegisterTicketModal from '../RegisterTicketModal';

import {ReactComponent as MoreIcon} from '../../assets/images/mdi_more_horiz.svg'
import image from '../../assets/images/picture.png'

import { Card, Menu } from 'antd';
import { useSelector } from 'react-redux';

const { SubMenu } = Menu;

function Ticket({ data, index, listIndex }) {
  const ticketInfo = useSelector(state => state.tickets)

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

  useEffect(() => {
    console.table(ticketInfo)
  }, [ticketInfo])

  return (
    <>
      <Card size="small" className={styles.card}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={data.image} alt="" />
        </div>

        <p className={styles.status}>{data.type}</p>
        <p className={styles.number}>{data.id}</p>
        <p className={styles.description}>{data.description}</p>

        <div className={styles.bottom}>
          {/* <p>{data.user}</p> */}
          <p>{ticketInfo.user}</p>
          <Menu 
            triggerSubMenuAction="click"
            expandIcon={<MoreIcon />}
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
    </>
  );
}

export default Ticket;