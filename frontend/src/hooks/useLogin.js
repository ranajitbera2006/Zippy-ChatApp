import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
import toast from "react-hot-toast"


const useLogin = () => {
  const [loading,setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logIn = async ({username,password}) => {
    setLoading(true);
    try {
      
      const res = await fetch("/api/auth/login",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          username,password
        })
      })
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Login failed");
      }
      localStorage.setItem("chat-user",JSON.stringify(data));
      setAuthUser(data);
      toast.success("Log in successfully!");
      return true;
    } catch (error) {
      toast.error(error.message);
      return false;
    }finally{
      setLoading(false);
    }

  }
  return {loading,logIn};
}

export default useLogin;
