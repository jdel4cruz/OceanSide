import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";

import { store } from "./Redux/store";

//Routes
import Menu from "./Routes/Menu";
import AddToCart from "./Routes/AddToCart";
import Cart from "./Routes/Cart";

const theme = createTheme({
  typography: {
    fontFamily: `'Lato', 'Roboto', 'sans-serif'`,
    fontSize: 16,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/:foodType/addtocart/:foodId" element={<AddToCart />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
