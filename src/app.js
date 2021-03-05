import React from 'react';
import { useSelector } from "react-redux";
import  {Redirect,
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Navbar from "./Component/Navbar";
import SignIn from "./Page/SignIn";
import Page2 from "./Page/Page2";
import Page3 from "./Page/Page3";
import GoOut from "./Page/goOut";

export default function App() {
    const logged = useSelector(state => state.repos.logged);
    if (logged === 1)
        return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/SignIn">
                        <SignIn />
                    </Route>
                    <Route exact path="/Page2">
                        <Page2 />
                    </Route>w
                    <Route exact path="/Page3">
                        <Page3 />
                    </Route>
                    <Route exact path="/goOut">
                        <GoOut />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
    else
        return (
            <Router>
                <div>
                    <Navbar />
                    <Switch>
                        <Route exact path="/SignIn">
                            <SignIn />
                        </Route>
                        <Route exact path="/Page3">
                            <Page3 />
                        </Route>
                        <Redirect to='/SignIn'/>
                    </Switch>
                </div>
            </Router>
        )
}


