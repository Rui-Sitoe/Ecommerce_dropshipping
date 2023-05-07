import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

//import '../styles/global.css'

//import Layout from '../containers/Layout'
import AppRouter from "./components/appRouter";

//import Login from '../containers/Login'

const App = () => {
  return (
    <div>
      <AppRouter/>
    </div>
  );
}

export default App;