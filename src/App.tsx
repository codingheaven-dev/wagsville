import { RouterProvider } from "react-router-dom";
import router from "./router";
import { AuthProvider } from "./services/auth";
import { APIProvider } from "./services/api";
import { ScheduleProvider } from "./services/schedule";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  :root {
    --color-primary: #5cb85c;
    --color-secondary: #5bc0de;
    --color-tertiary: #9b59b6;
    --color-white: #ffffff;
    --color-black: #222222;
  }
`;
function App() {
  return (
    <AuthProvider>
      <APIProvider>
        <ScheduleProvider>
          <GlobalStyle />
          <RouterProvider router={router} />
        </ScheduleProvider>
      </APIProvider>
    </AuthProvider>
  );
}

export default App;
