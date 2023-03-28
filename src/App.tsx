import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './App.css';
import Chatting from "./component/Chatting/Chatting";
import List from "./component/List/List";


function App() {
  return (
    <div className="App">
      <section className="gradient-custom">
        <div className="container py-5">
          <div className="row">
						<Chatting />
						{/*<List/>*/}
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
