import { ThemeSelectContext } from "utils/context";
import { useContext } from "react";
// Later should be a select button with more than 2 options, but this services demonstration
const Comp = () => {
  const { theme, setTheme } = useContext(ThemeSelectContext);

  return (
    <button
      onClick={() => {
        theme === "theme1" ? setTheme("theme2") : setTheme("theme1");
      }}
    >
      Switch Theme
    </button>
  );
};

export default Comp