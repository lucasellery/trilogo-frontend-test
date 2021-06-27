import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Header from '../../components/Header';
import Board from '../../components/Board';

import { Layout, Menu, Breadcrumb } from 'antd';
import { loadLists } from '../../services/api';
const { Content, Footer } = Layout;

function Home() {
  const data = loadLists()
  const [board, setBoard] = useState(data)
  
  useEffect(() => {
    getInitialBoard()
  }, [])

  useEffect(() => {
    localStorage.setItem('board', JSON.stringify(board))
  }, [board])
  
  async function getInitialBoard() {
    const initialBoard = JSON.parse(localStorage.getItem('board'))
    
    if(initialBoard) {
      setBoard(initialBoard)
    }
  }

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
