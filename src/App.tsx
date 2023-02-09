import { Route, Routes } from "react-router-dom";

import Background from "./layout/Background";
import { Auth, Dev } from "./screens";

function App() {
  return (
    <Background>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Dev />} />
      </Routes>
    </Background>
  );
}

export default App;
