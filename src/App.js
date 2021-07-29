import React from "react";
import './App.css';
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Widget from "./Components/Widget";


function App() {
  return (
   <div className="app">
       <Header/>
     <div className="app__body">

    
     {/* sidebar */}
     <Sidebar/>
     {/* feed */}
     <Feed/>
     {/* widgets */}
      <Widget />
   </div>
   </div>
  );
}

export default App;
