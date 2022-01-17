import React, { useState } from 'react';

const PlanContext = React.createContext([false, () => {}]);

const PlanProvider = ({ children }) => {
  const [state, setState] = useState(false);

  return (
    <PlanContext.Provider value={[state, setState]}>
      {children}
    </PlanContext.Provider>
  );
};

export { PlanContext, PlanProvider };
