import { useState } from 'react';
import { UseFormWatch, FieldValues } from 'react-hook-form';

export interface IUseInput<T extends FieldValues> {
  inputs: Record<string, boolean>,
  watch: UseFormWatch<T>
}

export const useInputFocus = <T extends FieldValues>({ inputs, watch }: IUseInput<T>) => {
  const [isFocused, setIsFocused] = useState({ ...inputs })

  const watchAllFields = watch();

  const handleFocus = (evt: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused({ ...isFocused, [evt.target.name]: true });
    // fix chrome initial autofill bug
    evt.currentTarget.removeAttribute("readOnly");
  };

  const handleBlur = (evt: React.FocusEvent<HTMLInputElement>) => {
    const name = evt.target.name as keyof T;

    if (watchAllFields[name] !== "")
      setIsFocused({ ...isFocused, [name]: true })
    else
      setIsFocused({ ...isFocused, [name]: false });

    // fix chrome initial autofill bug
    evt.currentTarget.setAttribute("readOnly", evt.currentTarget.value);
  };

  return { isFocused, handleFocus, handleBlur }
}