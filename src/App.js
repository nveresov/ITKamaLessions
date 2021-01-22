import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from "./components/Header/Header"
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';

// let SomeComponent = () => < Dialogs />

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">

        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          {/* <Route exact path='/profile' render={() => <Profile posts={posts} />} /> */}
          <Route exact path='/profile' render=
            {() => <Profile posts={props.posts} />} />

          {/* <Route path='/dialogs' component={Dialogs} /> */}
          {/* <Route path='/dialogs' render={SomeComponent} /> */}
          <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages} />} />

          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>


      </div>
    </BrowserRouter>
  );
}

export default App;
