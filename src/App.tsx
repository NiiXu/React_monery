import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Nav';
import Layout from './components/Layout';

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
        <Router>
            <Wrapper>
                <Main>
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
                </Main>
            </Wrapper>
        </Router>
    );
}

function NoMatch() {
    return (
        <div>页面不存在，你丫输错地址了吧！</div>
    );
}

function Statistics() {
    return (
        <Layout>
            <h2>统计</h2>
        </Layout>
    );
}

function Tags() {
    return (
        <Layout>
            <h2>标签</h2>
        </Layout>
    );
}

function Money() {
    return (
        <Layout>
            <h2>记账</h2>
        </Layout>
    );
}

export default App;
