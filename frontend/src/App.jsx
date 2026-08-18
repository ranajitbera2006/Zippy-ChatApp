import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import RedirectPage from "./pages/RedirectWelcome";
import { useState } from "react";
import Farewell from "./pages/Farewell";

function App() {
  const { authUser } = useAuthContext();
  const [isRedirecting, setIsRedirecting] = useState(true);
  if (isRedirecting) {
    return <RedirectPage onFinish={() => setIsRedirecting(false)} />;
  }
  return (
    <>
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" replace /> : <Login />}
        />
        <Route
          path="/farewell"
          element={!authUser ? <Navigate to="/login" replace /> : <Farewell />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" replace /> : <SignUp />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
