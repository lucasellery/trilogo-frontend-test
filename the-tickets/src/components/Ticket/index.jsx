import React, { useState } from 'react';

import styles from './styles.module.css';

import RegisterTicketModal from '../RegisterTicketModal';

import {ReactComponent as MoreIcon} from '../../assets/images/mdi_more_horiz.svg'
import image from '../../assets/images/picture.png'

import { Card, Menu } from 'antd';

const { SubMenu } = Menu;

function Ticket() {
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
    <>
      <Card size="small" className={styles.card}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={image} alt="" />
        </div>

        <p className={styles.status}>Procedimento</p>
        <p className={styles.number}>6523</p>
        <p className={styles.description}>Consertar vazamento</p>

        <div className={styles.bottom}>
          <p>Yudi Tamashiro</p>
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