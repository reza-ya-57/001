import './App.css';
import {useState} from 'react';
import {useSelector , useDispatch} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import * as actionCreator from './Redux/Actions/authAction';
import mainLayout from './Layout/mainLayout/mainLayout';

function App() {

  return (
    <mainLayout>
      <div className="App">
      <h3>Let's Build Somthing</h3>

    </div>
    </mainLayout>
  );
}

export default App;
