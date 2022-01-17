import React, { useState } from 'react';

const AuthContext = React.createContext([false, () => {}]);

const AuthProvider = ({ children }) => {
  const [state, setState] = useState(false);

  return (
    <AuthContext.Provider value={[state, setState]}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
