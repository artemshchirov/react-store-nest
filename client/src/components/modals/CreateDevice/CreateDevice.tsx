import React, { useState, useEffect, useRef, useContext } from "react";
import { useForm } from "react-hook-form";
import { DropDown, Modal, Button, FormField, FileUpload } from "../../ui";
import { useInputFocus } from "../../../hooks/useInputFocus";
import { DeviceContext } from "../../../context/DeviceContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./CreateDevice.module.scss";
import { observer } from "mobx-react";

export interface ICreateDeviceForm {
  type: string;
  brand: string;
  name: string;
  price: number;
  file: File;
}

const schema = yup.object().shape({
  name: yup
    .string()
    .typeError("Device name must be a string")
    .required("Device name must be a string"),
  price: yup
    .number()
    .typeError("Device price must be a number")
    .required("Device price must be a number"),
  file: yup
    .mixed()
    .required("Device image is required")
    .test(
      "fileSize",
      "File size must be less than 5MB",
      value => !value || value[0].size <= 5000000
    ),
});
export interface ICreateDeviceProps {
  isOpenModal: boolean;
  onCloseModal: () => void;
  onSubmit: (formData: ICreateDeviceForm) => void;
}

export interface IInfo {
  title: string;
  description: string;
  number: number;
}

export const CreateDevice: React.FC<ICreateDeviceProps> = observer(
  ({ isOpenModal, onCloseModal, onSubmit }) => {
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
    const [isTypeDropDownOpen, setIsDropDownTypeOpen] = useState(false);
    const [isBrandDropDownOpen, setIsDropDownBrandOpen] = useState(false);
    const [info, setInfo] = useState<IInfo[]>([]);

    const refTypeDropDown = useRef<HTMLLIElement>(null);
    const refBrandDropDown = useRef<HTMLLIElement>(null);

    const { device } = useContext(DeviceContext);

    const {
      register,
      watch,
      handleSubmit,
      formState: { errors },
    } = useForm<ICreateDeviceForm>({
      resolver: yupResolver(schema),
    });

    const [inputs, setInputs] = useState({
      name: false,
      price: false,
    });

    useEffect(() => {
      window.addEventListener("click", handleClickOutsideDropDown);
      return () => {
        window.removeEventListener("click", handleClickOutsideDropDown);
      };
    });

    const { isFocused, handleFocus, handleBlur } = useInputFocus({
      inputs,
      watch,
    });

    // TODO refactor, make generally scalable. Include toggle
    const handleClickOutsideDropDown = (event: MouseEvent) => {
      if (isTypeDropDownOpen) {
        if (refTypeDropDown.current && event.target instanceof HTMLElement) {
          if (!refTypeDropDown.current.contains(event.target)) {
            setIsDropDownTypeOpen(false);
          }
        }
      }
      if (isBrandDropDownOpen) {
        if (refBrandDropDown.current && event.target instanceof HTMLElement) {
          if (!refBrandDropDown.current.contains(event.target)) {
            setIsDropDownBrandOpen(false);
          }
        }
      }
    };

    const handleToggleTypeDropDown = () => {
      setIsDropDownTypeOpen(prevState => !prevState);
    };

    const handleToggleBrandDropDown = () => {
      setIsDropDownBrandOpen(prevState => !prevState);
    };

    const addInfo = () => {
      setInfo([...info, { title: "", description: "", number: Date.now() }]);
    };

    const removeInfo = (number: number) => {
      setInfo(info.filter(i => i.number !== number));
    };

    return (
      <Modal isOpen={isOpenModal} onCloseModal={onCloseModal} size="large">
        <Modal.Header align="center">
          <Modal.Title>Add device</Modal.Title>
        </Modal.Header>
        <Modal.Content>
          <ul className={styles["create-device__menu"]}>
            <li
              className={styles["create-device__menu-item"]}
              ref={refTypeDropDown}
              onClick={handleToggleTypeDropDown}
            >
              <span className={styles["create-device__menu-title"]}>
                {selectedType || "Type"}
              </span>
              <DropDown className={styles.catalog} isOpen={isTypeDropDownOpen}>
                <ul className={styles.catalog__menu}>
                  {device.types.map(type => (
                    <li
                      key={type.id}
                      className={styles["catalog__menu-item"]}
                      onClick={() => setSelectedType(type.name)}
                    >
                      {type.name}
                    </li>
                  ))}
                </ul>
              </DropDown>
            </li>
            <li
              className={styles["create-device__menu-item"]}
              ref={refBrandDropDown}
              onClick={handleToggleBrandDropDown}
            >
              <span>{selectedBrand || "Brand"}</span>
              <DropDown className={styles.catalog} isOpen={isBrandDropDownOpen}>
                <ul className={styles.catalog__menu}>
                  {device.brands.map(brand => (
                    <li
                      key={brand.id}
                      className={styles["catalog__menu-item"]}
                      onClick={() => setSelectedBrand(brand.name)}
                    >
                      {brand.name}
                    </li>
                  ))}
                </ul>
              </DropDown>
            </li>
          </ul>
          <FormField
            className={styles["create-device__input"]}
            label="Device name"
            name="name"
            type="text"
            register={register}
            error={errors.name && errors.name?.message}
            isFocused={isFocused.name}
            isRequired
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <FormField
            className={styles["create-device__input"]}
            label="Device price"
            name="price"
            type="number"
            register={register}
            error={errors.price && errors.price?.message}
            isFocused={isFocused.price}
            isRequired
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          <FileUpload
            label="Upload device image"
            error={errors.file && errors.file?.message}
            {...(register ? register("file") : register)} // TODO Look at this
            isRequired
          />

          <Button className={styles["create-device__button"]} onClick={addInfo}>
            Добавить новое свойство
          </Button>

          {info.map((i, index) => {
            return (
              <div
                key={i.number}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "24px",
                }} // FIXME style in div
              >
                <FormField
                  className={styles["create-device__input_type_property"]}
                  label="Info title"
                  name={`title-${index}`}
                  type="text"
                  register={register}
                  // FIXME
                  // error={
                  //   errors[`title-${index}`] && errors[`title-${index}`]?.message
                  // }
                  isFocused={isFocused[`title-${index}`]}
                  isRequired
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <FormField
                  className={styles["create-device__input_type_property"]}
                  label="Info description"
                  name={`desc-${index}`}
                  type="text"
                  register={register}
                  // FIXME
                  // error={
                  //   errors[`desc-${index}`] && errors[`desc-${index}`]?.message
                  // }
                  isFocused={isFocused[`desc-${index}`]}
                  isRequired
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <Button onClick={() => removeInfo(i.number)}>Delete</Button>
              </div>
            );
          })}
        </Modal.Content>
        <Modal.Footer onSubmit={handleSubmit(onSubmit)} />
      </Modal>
    );
  }
);

// TODO refactor
// <DropDown
//   isOpen={isTypeDropDownOpen}
//   toggleDropDown={handleToggleTypeDropDown}
//   refDropDown={refTypeDropDown}
//   defaultValue={selectedType}
// >
//   {optionsType.map(option => (
//     <DropDown.Option
//       key={option.value}
//       value={option.value}
//       onClick={() => setSelectedType(option))}
//     >
//       {option.label}
//     </DropDown.Option>
//   ))}
// </DropDown>
