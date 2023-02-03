import React, { useState } from "react";

export const usePasswordMatch = () => {
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

  const selectErrPasswordMessage = (message?: string) => {
    if (message) return message;
    if (!isPasswordMatch) return "Password mismatch";
  };

  return {
    setIsPasswordMatch,
    selectErrPasswordMessage,
  };
};
