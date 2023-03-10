import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import styled from 'styled-components';
import Tags from './view/Tags';
import Money from './view/Money';
import Statistics from './view/Statistics';
import NoMatch from './view/NoMatch';


const AppWrapper = styled.div`
  color: #333;
`;


const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;


function App() {
    return (
        <AppWrapper>
            <Router>
                <Switch>
                    <Route path="/tags">
                        <Tags/>
                    </Route>
                    <Route path="/money">
                        <Money/>
                    </Route>
                    <Route path="/statistics">
                        <Statistics/>
                    </Route>
                    <Redirect exact from="/" to="/money"/>
                    <Route path="*">
                        <NoMatch/>
                    </Route>
                </Switch>

            </Router>
        </AppWrapper>
    );
}


export default App;
