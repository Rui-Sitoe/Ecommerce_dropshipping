//import logo from './logo.svg';
//import './App.css';
import { createBrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h1>Home3</h1>

      <nav>
        <Link to="/home">HomePage</Link>
      </nav>
    </>
  );
}


