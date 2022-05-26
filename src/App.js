import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>home</div>}></Route>
        <Route
          path="testing"
          element={
            <div>
              <h2>testing</h2>
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
