import Header from "./Components/Header/Header";
import "./global.css";
import Home from "./Pages/Home/Home";
import WebpageLayout from "./Components/WebpageLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./Pages/Admin/Admin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <WebpageLayout>
                <Home />
              </WebpageLayout>
            }
          ></Route>

          <Route
            path="/admin"
            element={
              <WebpageLayout>
                <Admin />
              </WebpageLayout>
            }
          ></Route>

          <Route path="*" element={<div>HTTP 404 - Not Found</div>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
