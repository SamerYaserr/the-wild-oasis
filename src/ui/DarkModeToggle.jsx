import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

import ButtonIcon from "./ButtonIcon";
import { useDark } from "../context/DarkModeContext";

export default function DarkModeToggle() {
  const { isDark, toggleDark } = useDark();
  return (
    <ButtonIcon onClick={toggleDark}>
      {!isDark ? <IoMoonOutline /> : <IoSunnyOutline />}
    </ButtonIcon>
  );
}
