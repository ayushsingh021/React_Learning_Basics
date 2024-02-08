import "./App.css";
import UserContextProvider from "./context/userContext/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <UserContextProvider>
        <h1>Learning Context Api</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;
