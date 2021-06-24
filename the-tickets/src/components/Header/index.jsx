import React, { useState } from 'react';

import RegisterTicketModal from '../RegisterTicketModal'

import styles from './styles.module.css';
import { ReactComponent as LogoTrilogo } from '../../assets/images/logo-trilogo.svg';

import { PlusOutlined } from '@ant-design/icons';

import { Layout, Menu, Breadcrumb, Button } from 'antd';

const { Header, Content, Footer } = Layout;

function HeaderComp() {
  const [openModal, setOpenModal] = useState(false);

  function showModal() {
    setOpenModal(true);
  }

  function handleOk() {
    setOpenModal(false);
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
      <Layout>
        <Header className={styles.header} style={{ background: '#FFF', height: '80px' }}>
          <LogoTrilogo />
          <Button
            type="primary"
            icon={<PlusOutlined />}
            shape="round"
            size="large"
            className={styles.button}
            onClick={showModal}
          >
            Novo ticket
          </Button>
        </Header>
      </Layout>

      <RegisterTicketModal
        isModalVisible={openModal}
        handleCancel={handleCancel}
        onChangeType={onChangeType}
        onSubmitNewTicket={onSubmitNewTicket}
        title="Novo ticket"
      />
    </>
  );
}

export default HeaderComp;