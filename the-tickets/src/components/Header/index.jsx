import React from 'react';

import styles from './styles.module.css';
import { ReactComponent as LogoTrilogo } from '../../assets/images/logo-trilogo.svg';

import { PlusOutlined } from '@ant-design/icons';

import { Layout, Menu, Breadcrumb, Button } from 'antd';

const { Header, Content, Footer } = Layout;

function HeaderComp() {
  return (
    <Layout>
      <Header className={styles.header} style={{ background: '#FFF', height: '80px' }}>
        <LogoTrilogo />
        <Button
          type="primary"
          icon={<PlusOutlined />}
          shape="round"
          size="large"
          className={styles.button}
        >
          Novo ticket
        </Button>
      </Header>
    </Layout>
  );
}

export default HeaderComp;