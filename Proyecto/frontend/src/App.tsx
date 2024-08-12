import React from "react";
import AppRouter from "./AppRouter";

const App: React.FC = () => {
  return (
    <div className="App h-full flex flex-col">
      <AppRouter />
    </div>
  );
};

export default App;
