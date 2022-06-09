import { createContext } from "react";

export const CustomThemeContext = createContext<"dark" | "light">("light");
