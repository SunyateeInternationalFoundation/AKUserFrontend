import "./App.css";
import Home from "./components/HomePage/Home";
// import Login from "./components/User/Login";
import { useSelector } from "react-redux";
import ParentHome from "./components/HomePage/ParentHome";
function App() {
  const user = useSelector((state) => state.user);
  return (
    <>
      {/* <Routes>
        <Route path="/*" element={<LandingPage />}></Route>
      </Routes> */}
      {user.isLogin ? <ParentHome /> : <Home />}
    </>
  );
}

export default App;
