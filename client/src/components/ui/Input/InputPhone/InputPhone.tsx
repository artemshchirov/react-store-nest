import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  ForwardedRef,
  forwardRef,
} from "react";
import classNames from "classnames";
import styles from "../Input.module.scss";

export interface IInputPhoneProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  name?: string;
  type?: string;
  error?: string;
}
export const InputPhone = forwardRef(
  (
    { className, name, type, error, ...rest }: IInputPhoneProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    const PATTERN = /\D/g;

    const getInputNumbersValue = (value: string) => {
      // NOTE return only numbers
      return value.replace(PATTERN, "");
    };

    const handlePhoneInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      // +972 (xx) xxx-xx-xx - Israel number 18 symbols
      // +380 (xx) xxx-xx-xx - Ukrainian number 18 symbols
      const input = event.target;
      let inputNumbersValue = getInputNumbersValue(input.value);
      let formattedInputValue = "";
      const selectionStart = input.selectionStart;

      if (!inputNumbersValue) {
        return (input.value = "");
      }

      if (input.value.length !== selectionStart) {
        return;
      }

      // TODO israeli and ukrainian phone number masks
      formattedInputValue = inputNumbersValue.substring(0, 16);

      if (["7", "8", "9"].includes(inputNumbersValue[0])) {
        // NOTE russian phone number
        if (inputNumbersValue[0] === "9") {
          inputNumbersValue = "7" + inputNumbersValue;
        }

        const firstSymbols = inputNumbersValue[0] === "8" ? "8" : "+7";
        formattedInputValue = firstSymbols + " ";

        if (inputNumbersValue.length > 1) {
          formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
        }
        if (inputNumbersValue.length >= 5) {
          formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
        }
        if (inputNumbersValue.length >= 8) {
          formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
        }
        if (inputNumbersValue.length >= 10) {
          formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
        }
      } else {
        // NOTE not Russian phone number
        formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
      }

      input.value = formattedInputValue;
    };

    const handlePhoneKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
      // NOTE remove first symbol
      const input = evt.target as HTMLInputElement;
      if (
        evt.key === "Backspace" &&
        getInputNumbersValue(input.value).length === 1
      ) {
        input.value = "";
      }
      return input;
    };

    const handlePhonePaste = (evt: React.ClipboardEvent<HTMLInputElement>) => {
      const pasted =
        evt.clipboardData ?? (window as ClipboardEventInit)["clipboardData"];
      const input = evt.target as HTMLInputElement;
      const inputNumbersValue = getInputNumbersValue(input.value);

      if (pasted) {
        console.log(pasted.getData("Text"));
        const pastedText = pasted.getData("Text");
        if (PATTERN.test(pastedText)) {
          input.value = inputNumbersValue;
        }
      }
    };

    return (
      <>
        <input
          className={classNames(className, styles.input, {
            [styles.input_error]: error,
          })}
          maxLength={18}
          name={name}
          type={type}
          onInput={handlePhoneInput}
          onKeyDown={handlePhoneKeyDown}
          onPaste={handlePhonePaste}
          ref={ref}
          {...rest}
        />
      </>
    );
  }
);

InputPhone.displayName = "InputPhone";
