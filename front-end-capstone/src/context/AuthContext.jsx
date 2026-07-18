import { createContext, useState, useEffect } from "react";


export const AuthContext = createContext();
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
const [token, setToken] = useState(null);

useEffect(() => {
  const savedToken = localStorage.getItem("token");
  const savedUser = localStorage.getItem("user");

  if (savedToken && savedUser) {
    setToken(savedToken);
    setUser(JSON.parse(savedUser));
  }
}, []);

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  setToken(null);
  setUser(null);
}

return (
  <AuthContext.Provider
    value={{
      user,
      token,
      setUser,
      setToken,
      logout,
    }}
  >
    {children}
  </AuthContext.Provider>
);
}