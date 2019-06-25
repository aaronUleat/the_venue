import React from 'react';
import "./resources/styles.css";

import Header from "./components/header_footer/header";
import Featured from "./components/Featured";

function App() {
  return (
    <div className="App" style={{ height: "3000px", background:  "cornflowerblue"}}>
        <Header />
        <Featured></Featured>
    </div>
  );
}

export default App;
