import React from 'react';
import styles from './styles.module.css';

import {
  Form,
  Input,
  Button,
  Radio,
  Modal,
  Select,
  Upload
} from 'antd';

import { InboxOutlined } from '@ant-design/icons';
const { Option } = Select;

function RegisterTicketModal({
  isModalVisible,
  handleOk,
  handleCancel,
  onChangeType,
  onSubmitNewTicket,
  title
}) {
  const [form] = Form.useForm();

  return (
    <Modal
      title={title}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      className={styles.modal}
      footer={null}
    >
      <Form
        layout='vertical'
        form={form}
      >
        <Form.Item label="Descrição">
          <Input placeholder="Descrição" size="large" />
        </Form.Item>
        <Form.Item name="type" label="Tipo" rules={[{ required: true }]}>
          <Select
            placeholder="Tipo"
            onChange={onChangeType}
            allowClear
            size="large"
          >
            <Option value="bem">Bem</Option>
            <Option value="predial">Predial</Option>
            <Option value="procedimento">Procedimento</Option>
          </Select>
        </Form.Item>

        <Form.Item name="user" label="Usuário" rules={[{ required: true }]}>
          <Select
            placeholder="Usuário"
            onChange={onChangeType}
            allowClear
            size="large"
          >
            <Option value={1}>Yudi Tamashiro</Option>
            <Option value={2}>Priscilla Alcantara</Option>
            <Option value={3}>Joel Maia</Option>
            <Option value={4}>Washington Praxedes</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Imagem">
          <Form.Item name="dragImage" valuePropName="image" noStyle>
            <Upload.Dragger name="images" action="/upload.do">
              <p className="ant-upload-drag-icon">
                <InboxOutlined style={{ color:"#4C12A1" }} />
              </p>
              <p>Arraste uma imagem para anexar ao ticket</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            span: 32,
            offset: 19,
          }}
          className={styles.buttonContainer}
        >
          <Button
            type="primary"
            shape="round"
            className={styles.button}
            htmlType="submit"
            onClick={onSubmitNewTicket}
          >
            Criar ticket
          </Button>
        </Form.Item>

      </Form>
    </Modal>
  );
}

export default RegisterTicketModal;