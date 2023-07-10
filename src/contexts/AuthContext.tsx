import React, { ReactNode, createContext, useState } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  authToken: string;
  setToken: (token: string) => void;
  setLogout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  authToken: '',
  setToken: () => { return },
  setLogout: () => { return },
});

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const storedToken = localStorage.getItem('userToken');
  const [authToken, setAuthToken] = useState<string>(storedToken ? storedToken : '');

  const setToken = (token: string) => {
    if (storedToken) {
      setAuthToken(storedToken);
    }
    setAuthToken(token);
  };

  const setLogout = () => {
    setAuthToken('');
    localStorage.removeItem('userToken');
  }

  return (
    <AuthContext.Provider value={{ authToken, setToken, setLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };