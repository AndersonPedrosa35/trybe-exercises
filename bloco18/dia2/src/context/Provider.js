
import React, { useState } from 'react';
import AppContext from './Context';

function Provider({ children }) {
  const [input, setInput] = useState('');
  const [task, setTask] = useState('');
  const contextValue = {
    input,
    setInput,
    task,
    setTask,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;