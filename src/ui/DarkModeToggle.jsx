import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";

export default function DarkModeToggle() {
  const { isDark, toggleDark } = useDarkMode();
  return (
    <ButtonIcon onClick={toggleDark}>
      {!isDark ? <IoMoonOutline /> : <IoSunnyOutline />}
    </ButtonIcon>
  );
}
