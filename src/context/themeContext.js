import { useContext } from "react";
import { themeReducer } from "./themeReducer";
import { createContext } from "react";
import { useReducer } from "react";

const intialState = {
    theme: "dark",
};

const ThemeStateContext = createContext();
const ThemeDispatchContext = createContext();

export const useThemeState = () => useContext(ThemeStateContext);
export const useThemeDispatch = () => useContext(ThemeDispatchContext);

export const ThemeProvider=({children}) => {
    const [theme, dispatch] = useReducer(themeReducer,intialState);

    return (
        <ThemeStateContext.Provider value={theme}>
            <ThemeDispatchContext.Provider value={dispatch}>
                {children}
            </ThemeDispatchContext.Provider>
        </ThemeStateContext.Provider>
    )
}