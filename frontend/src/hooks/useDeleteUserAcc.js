import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useDeleteUserAcc = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const deleteUserAccount = async (userId) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/user/${userId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        throw new Error(data.error);
        return false;
      }
      setAuthUser(null);
      toast.success("Your account deleted successfully!");
      return true;
    } catch (error) {
      toast.error(error.message);
      return false;
    } finally {
      setLoading(false);
    }
  };
  return { loading, deleteUserAccount };
};

export default useDeleteUserAcc;
