import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Converter from './containers/Converter'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';


export default (
      <Route path="/">
        <IndexRoute component={Converter}/>
        <Route path="about" component={AboutPage}/>
        <Route path="*" component={NotFoundPage}/>
      </Route>
);
