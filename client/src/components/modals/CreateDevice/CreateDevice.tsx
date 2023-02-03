import React from "react";
import { Modal } from "../../ui";
import { FormField } from "../../ui/FormField/FormField";
import { useInput } from "../../../hooks/useInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export interface ICreateDeviceForm {
  device: string;
}

const schema = yup.object().shape({
  device: yup.string().required("Device is required"),
});

export interface ICreateDeviceProps {
  isOpenModal: boolean;
  onCloseModal: () => void;
  onSubmit: (formData: ICreateDeviceForm) => void;
}

export const CreateDevice: React.FC<ICreateDeviceProps> = ({
  isOpenModal,
  onCloseModal,
  onSubmit,
}) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateDeviceForm>({
    resolver: yupResolver(schema),
  });

  const inputs = {
    device: false,
  };

  const { isFocused, handleFocus, handleBlur } = useInput({ inputs, watch });

  return (
    <Modal isOpen={isOpenModal} onCloseModal={onCloseModal}>
      <Modal.Header>
        <Modal.Title>Add device</Modal.Title>
      </Modal.Header>
      <Modal.Content>
        <FormField
          label="Device"
          name="device"
          type="text"
          register={register}
          error={errors.device && errors.device?.message}
          isFocused={isFocused.device}
          isRequired
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </Modal.Content>
      <Modal.Footer onSubmit={handleSubmit(onSubmit)} />
    </Modal>
  );
};
