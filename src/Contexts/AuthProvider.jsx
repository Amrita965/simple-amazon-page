import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const auth = getAuth(app);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <AuthContext.Provider value={{ createUser, isLoading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
