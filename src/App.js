
import './App.css';
import ReactDOM from 'react-dom';
import React from 'react';
import { API_KEY, API_URL_SERCH } from './Api';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      

    }
  };
  render() {
    const search="mobi dik";
    async function  searchBook(){
      const response=await fetch(`${API_URL_SERCH}=${search}:keyes&key=${API_KEY}` );
      const data = await response.json();
      console.log(data);
   }
   searchBook()
    return (
      <div className="App">
        <header className="App-header">




        </header>
      </div>
    );
  }
}
export default App;
