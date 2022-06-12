import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";

import { store } from "./Redux/store";

//Routes
import Menu from "./Routes/Menu";
import Checkout from "./Routes/Checkout";
import About from "./Routes/About";

declare module "@mui/material/styles" {
  interface Palette {
    custom: Palette["primary"];
  }

  interface PaletteOptions {
    custom?: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  typography: {
    fontFamily: `'Lato', 'Roboto', 'sans-serif'`,
    fontSize: 16,
  },
  palette: {
    custom: {},
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
