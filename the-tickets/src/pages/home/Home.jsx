import React from 'react';
import styles from './styles.module.css';
import Header from '../../components/Header';
import Board from '../../components/Board';

import { Layout, Menu, Breadcrumb } from 'antd';
const { Content, Footer } = Layout;

function Home() {
  return (
    <Layout data-testid="home" className={styles.container}>
      <Header />
      <Content className={styles.content}>
        <Board />
      </Content>
    </Layout>
  );
}

export default Home;
