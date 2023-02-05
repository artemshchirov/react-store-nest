import React from "react";
import { Modal } from "../../ui";
import { FormField } from "../../ui/FormField/FormField";
import { useInputFocus } from "../../../hooks/useInputFocus";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export interface ICreateTypeForm {
  type: string;
}

const schema = yup.object().shape({
  type: yup.string().required("Type is required"),
});

export interface ICreateTypeProps {
  isOpenModal: boolean;
  onCloseModal: () => void;
  onSubmit: (formData: ICreateTypeForm) => void;
}

export const CreateType: React.FC<ICreateTypeProps> = ({
  isOpenModal,
  onCloseModal,
  onSubmit,
}) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateTypeForm>({
    resolver: yupResolver(schema),
  });

  const inputs = {
    type: false,
  };

  const { isFocused, handleFocus, handleBlur } = useInputFocus({ inputs, watch });

  return (
    <Modal isOpen={isOpenModal} onCloseModal={onCloseModal}>
      <Modal.Header>
        <Modal.Title>Add device type</Modal.Title>
      </Modal.Header>
      <Modal.Content>
        <FormField
          label="Type"
          name="type"
          type="text"
          register={register}
          error={errors.type && errors.type?.message}
          isFocused={isFocused.type}
          isRequired
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </Modal.Content>
      <Modal.Footer onSubmit={handleSubmit(onSubmit)} />
    </Modal>
  );
};
