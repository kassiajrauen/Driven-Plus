import React, { useState } from 'react';

const DataCardContext = React.createContext([false, () => {}]);

const DataCardProvider = ({ children }) => {
  const [state, setState] = useState(false);

  return (
    <DataCardContext.Provider value={[state, setState]}>
      {children}
    </DataCardContext.Provider>
  );
};

export { DataCardContext, DataCardProvider };
