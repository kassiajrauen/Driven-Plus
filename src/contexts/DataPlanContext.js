import React, { useState } from 'react';

const DataPlanContext = React.createContext([false, () => {}]);

const DataPlanProvider = ({ children }) => {
  const [state, setState] = useState(false);

  return (
    <DataPlanContext.Provider value={[state, setState]}>
      {children}
    </DataPlanContext.Provider>
  );
};

export { DataPlanContext, DataPlanProvider };
