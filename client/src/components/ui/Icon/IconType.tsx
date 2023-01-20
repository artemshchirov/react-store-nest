import React from "react";
import { genUid } from "../../../utils/guid";
import { ReactComponent as ArrowDown } from "../../../assets/icons/ArrowDown.svg";
import { ReactComponent as ArrowLeft } from "../../../assets/icons/ArrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../../assets/icons/ArrowRight.svg";
import { ReactComponent as Center } from "../../../assets/icons/Center.svg";
import { ReactComponent as Checkbox } from "../../../assets/icons/Checkbox.svg";
import { ReactComponent as Close } from "../../../assets/icons/Close.svg";
import { ReactComponent as Copy } from "../../../assets/icons/Copy.svg";
import { ReactComponent as Edit } from "../../../assets/icons/Edit.svg";
import { ReactComponent as Exit } from "../../../assets/icons/Exit.svg";
import { ReactComponent as Home } from "../../../assets/icons/Home.svg";
import { ReactComponent as Minus } from "../../../assets/icons/Minus.svg";
import { ReactComponent as Pdf } from "../../../assets/icons/files/Pdf.svg";
import { ReactComponent as Plus } from "../../../assets/icons/Plus.svg";
import { ReactComponent as Search } from "../../../assets/icons/Search.svg";
import { ReactComponent as Spinner } from "../../../assets/icons/Spinner.svg";
import { ReactComponent as Telegram } from "../../../assets/icons/Telegram.svg";
import { ReactComponent as Visibility } from "../../../assets/icons/Visibility.svg";
import { ReactComponent as VisibilityOff } from "../../../assets/icons/VisibilityOff.svg";

export type IconType =
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight"
  | "Center"
  | "Checkbox"
  | "Close"
  | "Copy"
  | "Edit"
  | "Exit"
  | "Home"
  | "Minus"
  | "Pdf"
  | "Plus"
  | "Search"
  | "Spinner"
  | "Telegram"
  | "Visibility"
  | "VisibilityOff";

export const iconTypes = new Map([
  ["ArrowDown", <ArrowDown key={genUid()} />],
  ["ArrowLeft", <ArrowLeft key={genUid()} />],
  ["ArrowRight", <ArrowRight key={genUid()} />],
  ["Center", <Center key={genUid()} />],
  ["Checkbox", <Checkbox key={genUid()} />],
  ["Close", <Close key={genUid()} />],
  ["Copy", <Copy key={genUid()} />],
  ["Edit", <Edit key={genUid()} />],
  ["Exit", <Exit key={genUid()} />],
  ["Home", <Home key={genUid()} />],
  ["Minus", <Minus key={genUid()} />],
  ["Pdf", <Pdf key={genUid()} />],
  ["Plus", <Plus key={genUid()} />],
  ["Search", <Search key={genUid()} />],
  ["Spinner", <Spinner key={genUid()} />],
  ["Telegram", <Telegram key={genUid()} />],
  ["Visibility", <Visibility key={genUid()} />],
  ["VisibilityOff", <VisibilityOff key={genUid()} />],
]);
