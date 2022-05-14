import { Routes, Route } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material/styles";

//Routes
import Menu from "./Routes/Menu";
import AddToCart from "./Routes/AddToCart";

const theme = createTheme({
  typography: {
    fontFamily: `'Lato', 'Roboto', 'sans-serif'`,
    fontSize: 16,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/:foodType" element={<Menu />}></Route>
        <Route
          path="/:foodType/addtocart/:foodId"
          element={<AddToCart />}
        ></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
