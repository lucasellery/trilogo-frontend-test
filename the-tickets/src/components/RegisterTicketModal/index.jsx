import React, { useState } from 'react';
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
import { useDispatch } from 'react-redux';
import { addTicket } from '../../store/Tickets/Tickets.actions';
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
  const dispatch = useDispatch();

  const [inputDescription, setInputDescription] = useState();
  const [ticketType, setTicketType] = useState();
  const [user, setUser] = useState();
  const [image, setImage] = useState();

  function handleFinish(params) {
    console.log(params)
  }

  function createTicket() {
    dispatch(addTicket(inputDescription, ticketType, user, image))
    console.log(`Added: ${inputDescription, ticketType, user, image}`)
    handleOk()
  }

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
        onFinish={handleFinish}
      >
        <Form.Item label="Descrição" name={['description']}>
          <Input
            onChange={(event) => {
              setInputDescription(event?.target?.value)
            }}
            placeholder="Descrição"
            size="large"
          />
        </Form.Item>
        <Form.Item name={["type"]} label="Tipo" rules={[{ required: true }]}>
          <Select
            placeholder="Tipo"
            onChange={(event) => {
              setTicketType(event?.target?.value)
            }}
            allowClear
            size="large"
          >
            <Option value="bem">Bem</Option>
            <Option value="predial">Predial</Option>
            <Option value="procedimento">Procedimento</Option>
          </Select>
        </Form.Item>

        <Form.Item name={["user"]} label="Usuário" rules={[{ required: true }]}>
          <Select
            placeholder="Usuário"
            onChange={(event) => {
              setUser(event?.target?.value)
            }}
            allowClear
            size="large"
          >
            <Option value="Yudi Tamashiro">Yudi Tamashiro</Option>
            <Option value="Priscilla Alcantara">Priscilla Alcantara</Option>
            <Option value="Joel Maia">Joel Maia</Option>
            <Option value="Washington Praxedes">Washington Praxedes</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Imagem">
          <Form.Item
            name={["dragImage"]}
            valuePropName="image"
            getValueFromEvent={(event) => {
              setImage(event?.target?.value)
            }}
            noStyle
          >
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
            onClick={createTicket}
          >
            Criar ticket
          </Button>
        </Form.Item>

      </Form>
    </Modal>
  );
}

export default RegisterTicketModal;