import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
// import { Switch, Route } from 'react-router-dom';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Home from '../components/Home';
import AllChallenges from '../components/AllChallenges';
import MyChallenges from '../components/MyChallenges';
import Challenge from '../components/Challenge';
import PeanutGallery from '../components/PeanutGallery';
import UserStats from '../components/UserStats';
import BrainGames from '../components/BrainGames';
import PhysicalFeats from '../components/PhysicalFeats';
import KitchenFun from '../components/KitchenFun';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/home" component={Home} />
      <Route path="/all-challenges" component={AllChallenges} />
      <Route path="/my-challenges" component={MyChallenges} />
      <Route path="/user-stats" component={UserStats} />
      <Route path="/peanut-gallery" component={PeanutGallery} />
      <Route path="/challenge" component={Challenge} />
      <Route path="/brain-games" component={BrainGames} />
      <Route path="/physical-feats" component={PhysicalFeats} />
      <Route path="/kitchen-fun" component={KitchenFun} />
      {/* <Route path="/challenge" component={Challenge} /> */}
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={SignIn} />
    </Switch>
  );
}