import React, { useState } from "react";
import { Button } from "../../components/ui";

// FIXME refactor to index.ts
import {
  CreateType,
  ICreateTypeForm,
} from "../../components/modals/CreateType/CreateType";
import styles from "./Admin.module.scss";
import {
  CreateBrand,
  ICreateBrandForm,
} from "../../components/modals/CreateBrand/CreateBrand";
import {
  CreateDevice,
  ICreateDeviceForm,
} from "../../components/modals/CreateDevice/CreateDevice";

export const Admin: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isCreateBrandModal, setIsCreateBrandModal] = useState(false);
  const [isCreateDeviceModal, setIsCreateDeviceModal] = useState(false);

  const [isCreateTypeModal, setIsCreateTypeModal] = useState(false);
  const handleCreateTypeModalOpen = () => {
    setIsCreateTypeModal(true);
  };

  const handleCreateTypeModalClose = () => {
    setIsCreateTypeModal(false);
  };

  const handleCreateTypeModalSubmit = (formData: ICreateTypeForm) => {
    console.log(formData);
    setIsCreateTypeModal(false);
  };

  const handleCreateBrandModalOpen = () => {
    setIsCreateBrandModal(true);
  };

  const handleCreateBrandModalClose = () => {
    setIsCreateBrandModal(false);
  };

  const handleCreateBrandModalSubmit = (formData: ICreateBrandForm) => {
    console.log(formData);
    setIsCreateBrandModal(false);
  };

  const handleCreateDeviceModalOpen = () => {
    setIsCreateDeviceModal(true);
  };

  const handleCreateDeviceModalClose = () => {
    setIsCreateDeviceModal(false);
  };

  const handleCreateDeviceModalSubmit = (formData: ICreateDeviceForm) => {
    console.log(formData);
    setIsCreateDeviceModal(false);
  };

  return (
    <div className={styles.admin} data-testid="Admin">
      <Button
        className={styles.admin__button}
        onClick={handleCreateTypeModalOpen}
      >
        Add type
      </Button>
      <Button
        className={styles.admin__button}
        onClick={handleCreateBrandModalOpen}
      >
        Add brand
      </Button>
      <Button
        className={styles.admin__button}
        onClick={handleCreateDeviceModalOpen}
      >
        Add device
      </Button>

      <CreateType
        isOpenModal={isCreateTypeModal}
        onCloseModal={handleCreateTypeModalClose}
        onSubmit={handleCreateTypeModalSubmit}
      />
      <CreateBrand
        isOpenModal={isCreateBrandModal}
        onCloseModal={handleCreateBrandModalClose}
        onSubmit={handleCreateBrandModalSubmit}
      />
      <CreateDevice
        isOpenModal={isCreateDeviceModal}
        onCloseModal={handleCreateDeviceModalClose}
        onSubmit={handleCreateDeviceModalSubmit}
      />
    </div>
  );
};
