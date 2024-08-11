import logo from './logo.svg';
import './App.css';
import { Typography } from '@mui/material';
import FormComponent from './RegisterForm/FormComponent';

function App() {
  return (
    <div className="App">
      <Typography variant="h1" component="h2">
        coding gyan !!
      </Typography>
      <FormComponent/>
    </div>
  );
}

export default App;
