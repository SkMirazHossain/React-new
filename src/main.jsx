import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { ImportantNotes } from './ImportantNotes'
 import { App } from './App'
//  import './index.css'
// import { Todo } from './project/TodoApp/ToDo'
// import { ReactUseEffect,ReactUseEffectDate } from './components/hooks/useEffect'
// import { Challenge } from './components/hooks/useEffect/useEffectChallenge'
// import { FatchDataFromApi } from './components/hooks/useEffect/FatchDataFromApiUsingPromissChaning'
// import { FatchDataFromApi } from './components/hooks/useEffect/FatchDataFromApiUsingAsyncAwait'
// import { TestProps } from './components/TestProps'
// import { DarkLight } from "./components/DarkLightTheme";
// import { ThemeProvider } from "./components/DarkLightTheme";
// import { DarkLightDarkLightThemeWithoutContextAPI } from "./components/DarkLightThemeWithoutContextAPI";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Todo/> */}
    {/* <ImportantNotes /> */}
    <App/>
    {/* <ReactUseEffect/> */}
    {/* <ReactUseEffectDate/> */}
    {/* <Challenge/> */}
    {/* <FatchDataFromApi/> */}
    {/* <TestProps/> */}
    {/* 
    <ThemeProvider> 
      <DarkLight />
    </ThemeProvider>
    */}
    {/* <DarkLightDarkLightThemeWithoutContextAPI/> */}
  </StrictMode>
);
