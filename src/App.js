import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import SingIn from './Components/SingIn';
import SingUp from './Components/SingUp';
import Comment from './Components/Comment';
import {BrowserRouter as Router,Routes as Switch , Route,Link } from 'react-router-dom';
import ForgotPassword from './Components/ForgotPassword';
function App() {
  return (
    <div >
      <Router>
        <Header></Header>
        <div className='container'>
        <Switch>
        <Route path="/" exact element={<SingIn/>}></Route>
        <Route path="/signUp" exact element={<SingUp/>}></Route>
        <Route path="/forgotPassword" exact element={<ForgotPassword/>}></Route>
        <Route path="/comments" exact element={<Comment/>}></Route>
        </Switch>
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
