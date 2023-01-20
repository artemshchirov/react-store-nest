export const normalizePhoneNumber = (telephoneNumber: string) => {
  const PATTERN = /\D/g;
  const inputNumbersValue = telephoneNumber.replace(PATTERN, "");
  const firstSymbols = inputNumbersValue[0] === "8" ? "8" : "+7";
  let formattedInputValue = firstSymbols;

  if (firstSymbols === "8") {
    formattedInputValue = inputNumbersValue;
  }

  if (firstSymbols === "+7") {
    formattedInputValue = "+" + inputNumbersValue;
  }

  return formattedInputValue;
};