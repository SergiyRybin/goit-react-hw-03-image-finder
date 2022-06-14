import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import React from 'react';
import Searchbar from '../Searchbar/Searchbar';
import s from '../App/App.module.css';

const App = () => {
  return (
    <div className={s.App}>
      <Searchbar />
    </div>
  );
};

export default App;
