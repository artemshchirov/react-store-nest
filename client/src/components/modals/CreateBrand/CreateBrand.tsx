import React from "react";
import { Modal } from "../../ui";
import { FormField } from "../../ui";
import { useInputFocus } from "../../../hooks/useInputFocus";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export interface ICreateBrandForm {
  brand: string;
}

const schema = yup.object().shape({
  brand: yup.string().required("Brand is required"),
});

export interface ICreateBrandProps {
  isOpenModal: boolean;
  onCloseModal: () => void;
  onSubmit: (formData: ICreateBrandForm) => void;
}

export const CreateBrand: React.FC<ICreateBrandProps> = ({
  isOpenModal,
  onCloseModal,
  onSubmit,
}) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateBrandForm>({
    resolver: yupResolver(schema),
  });

  const inputs = {
    brand: false,
  };

  const { isFocused, handleFocus, handleBlur } = useInputFocus({
    inputs,
    watch,
  });

  return (
    <Modal isOpen={isOpenModal} onCloseModal={onCloseModal}>
      <Modal.Header>
        <Modal.Title>Add brand</Modal.Title>
      </Modal.Header>
      <Modal.Content>
        <FormField
          label="Brand"
          name="brand"
          type="text"
          register={register}
          error={errors.brand && errors.brand?.message}
          isFocused={isFocused.brand}
          isRequired
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </Modal.Content>
      <Modal.Footer onSubmit={handleSubmit(onSubmit)} />
    </Modal>
  );
};
