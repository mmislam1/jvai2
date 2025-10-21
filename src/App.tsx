import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App bg-black">
      <header >  
        <div className="background flex flex-col items-center justify-center"
          style={{ backgroundImage: "url('/children.jpg')" }}>
          <div className="background flex flex-col items-center justify-center bg-black/50">

            <div className="box1 flex flex-col items-center justify-center bg-[rgb(231,237,245)] rounded-md w-full lg:w-[40vw]  p-4">
              <h1 className="heading">Log In</h1>
            </div>
          </div>
        </div>   
      </header>
    </div>
  );
}

export default App;
