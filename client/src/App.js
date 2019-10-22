import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
//Redux
import { Provider} from 'react-redux';
import store from './redux/store';

//Components
import Navbar from './components/Navbar'
import "./App.css";
import AuthRoute from './util/AuthRoute.js';
//Pages
import home from './pages/home';
import login from './pages/login'
import signup from './pages/signup'
import profile from './pages/profile';
import allProfiles from './pages/allProfiles'

/* import { SET_AUTHENTICATED } from './redux/type';mn  
2b import axios from 'axios';
import {logoutUser,getUserData} from './redux/actions/userActions'
import jwtDecode from 'jwt-decode' */

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#33c9dc',
      main: '#00bcd4',
      dark: '#008394',
      contrastText: '#fff'
    },
    secondary:{
      light: '#ff6333',
      main: '#ff3d00',
      dark: '#b22a00',
      contrastText: '#fff'

    }
  },
  typography: {
    useNextVariants: true
  }
    

})
/* const token = localStorage.Token;
if(token){
  const decodedToken = jwtDecode(token);
  if(decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser())
    window.location.href = '/login'
  }else{
    store.dispatch({type: SET_AUTHENTICATED});
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData())
  }
} */
class App extends Component {
  render() {
    return (

      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
        <div className="App">
        <Router>
          
        <Navbar/>
          <div className="container">
          <Switch>
            <Route exact path="/" component={home}/>
            <Route exact path="/signup" component={signup}/>
            <AuthRoute exact path="/login" component={login}/>
            <AuthRoute exact path="/profile" component={profile} />
            <AuthRoute exact path="/all" component={allProfiles} />
           
            
          </Switch>
          </div>
        </Router>
        
        
        
      </div>

        </Provider>
        

      </MuiThemeProvider>
      
    );
  }
}

export default App


