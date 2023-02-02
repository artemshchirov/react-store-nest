import React, { useState } from "react";
import { Button, Modal } from "../../components/ui";
import styles from "./Admin.module.scss";

export const Admin: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModalOpen = () => {
    setIsOpenModal(true);
  };

  const handleModalClose = () => {
    setIsOpenModal(false);
  };

  const handleModalSubmit = () => {
    setIsOpenModal(false);
  };

  return (
    <div className={styles.admin} data-testid="Admin">
      <Button onClick={handleModalOpen}>Open Modal Window</Button>
      <Modal isOpen={isOpenModal} onCloseModal={handleModalClose}>
        <Modal.Header>
          <h2>Title</h2>
        </Modal.Header>

        <Modal.Content>Content</Modal.Content>

        <Modal.Footer onSubmit={handleModalSubmit}></Modal.Footer>
      </Modal>

      <Button className={styles.admin__button}>Добавить тип</Button>
      <Button className={styles.admin__button}>Добавить тип</Button>
      <Button className={styles.admin__button}>Добавить тип</Button>
    </div>
  );
};
