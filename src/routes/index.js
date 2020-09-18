import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
// import { Switch, Route } from 'react-router-dom';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Home from '../components/Home';
import AllChallenges from '../components/AllChallenges';
import MyChallenges from '../components/MyChallenges';
import TrashTalkForum from '../components/TrashTalkForum';
import UserStats from '../components/UserStats';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/home" component={Home} />
      <Route path="/all-challenges" component={AllChallenges} />
      <Route path="/my-challenges" component={MyChallenges} />
      <Route path="/user-stats" component={UserStats} />
      <Route path="/trash-talk-forum" component={TrashTalkForum} />
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={SignIn} />
    </Switch>
  );
}