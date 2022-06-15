import { FC } from "react";

import { Routes, Route } from "react-router-dom";

import { Main, Authorization, Settings } from "./pages";
import { Header } from "./components";

import './App.scss';

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Main/> } />
        <Route path="/auth" element={ <Authorization/> } />
        <Route path="/settings" element={ <Settings/> } />
      </Routes>
    </div>
  );
}

export default App;
