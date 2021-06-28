import React, { useContext, useState } from "react";
import styles from "./styles.module.css";

import { Form, Input, Button, Modal, Select, Upload } from "antd";

import { InboxOutlined } from "@ant-design/icons";
import TicketContext from "../../context/TicketContext";
const { Option } = Select;

function RegisterTicketModal({
  isModalVisible,
  handleOk,
  handleCancel,
  handleChangeType,
  handleChangeDescription,
  handleChangeUser,
  handleChangeImage,
  onSubmitNewTicket,
  handleChange,
  title,
}) {
  const [form] = Form.useForm();
  const [inputDescription, setInputDescription] = useState("");
  const [ticketType, setTicketType] = useState("");
  const [user, setUser] = useState("");
  const [image, setImage] = useState("");
  const [newItem, setNewItem] = useState([]);

  function handleChangeType(event) {
    setTicketType(event.target?.value);
  }

  function handleChangeDescription(event) {
    setInputDescription(event.target?.value);
  }

  function handleChangeUser(event) {
    setUser(event.target?.value);
  }

  function handleChangeImage(event) {
    setImage(event.target?.value);
  }

  function addTicket() {
    setNewItem([...newItem, user, ticketType, image, inputDescription]);
  }

  return (
    <TicketContext.Provider value={{ addTicket, newItem }}>
      <Modal
        title={title}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        className={styles.modal}
        footer={null}
      >
        <Form layout="vertical" form={form} onFinish={onSubmitNewTicket}>
          <Form.Item label="Descrição" name="description">
            <Input
              onChange={handleChangeDescription}
              placeholder="Descrição"
              size="large"
              value={inputDescription}
            />
          </Form.Item>
          <Form.Item name="type" label="Tipo" rules={[{ required: true }]}>
            <Select
              placeholder="Tipo"
              onChange={handleChangeType}
              allowClear
              size="large"
              value={ticketType}
            >
              <Option value="bem">Bem</Option>
              <Option value="predial">Predial</Option>
              <Option value="procedimento">Procedimento</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name={["user"]}
            label="Usuário"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Usuário"
              onChange={handleChangeUser}
              allowClear
              size="large"
              value={user}
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
              valuePropName={image}
              getValueFromEvent={handleChangeImage}
              noStyle
            >
              <Upload.Dragger name="images" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <InboxOutlined style={{ color: "#4C12A1" }} />
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
            >
              Criar ticket
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </TicketContext.Provider>
  );
}

export default RegisterTicketModal;
