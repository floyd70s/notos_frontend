import 'core-js';
import 'regenerator-runtime/runtime';
import 'raf/polyfill';
import React, { useState, useRef } from 'react';

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import RegisterHeader from "components/Headers/RegisterHeader.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";

import PostForm from './PostForm';
import Post from './Post';
import Posts from './Posts';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


// reactstrap components
import {
  Container
} from "reactstrap";

function ListCampaign() {
  const form = useRef(null);
  const [inputs, setInputs] = useState(getInitialInputsState());
  const [signUpButtonDisabled, setSignUpButtonDisabled] = useState(true);
  const [resetButtonDisabled, setResetButtonDisabled] = useState(true);


  return (
    <>
      <IndexNavbar />
      <RegisterHeader />
      <div className="wrapper">
        <div className="section section-about-us">
          <Container>
            <div>
              {/* <Hero header="React Blog" /> */}
              <BrowserRouter>
                <div>
                  {/* <NavBar /> */}
                  <Container>
                    <Switch>
                      <Redirect
                        from="/home"
                        to="/create"
                      />
                      <Route
                        path="/"
                        exact
                        component={Posts}
                      />
                      <Route
                        path="/post/:_id"
                        exact
                        strict
                        component={Post}
                      />
                      <Route
                        path="/create"
                        exact
                        component={PostForm}
                      />
                      <Redirect to="/" />

                    </Switch>
                  </Container>
                </div>
              </BrowserRouter>
            </div>
          </Container>
        </div>
      </div>
      <TransparentFooter />
    </>
  );
}

export default ListCampaign;
