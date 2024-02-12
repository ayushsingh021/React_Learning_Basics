import { useContext , createContext } from "react";

//i can write useContext like this way as well(better) in a single file instead two file like i did in miniContext Project
export const ThemeContext = createContext({
    themeMode : "light",
    darkTheme : ()=>{},
    lightTheme : () =>{}
}) //in the create context we are also providing context at the time of creation


export const ThemeContextProvider = ThemeContext.Provider ; //provider

//custom hook
export default function useTheme(){
    return useContext(ThemeContext);
}