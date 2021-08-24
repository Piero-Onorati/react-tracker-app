import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import News from "./pages/News";
import Vaccine from "./pages/Vaccine";

function App() {
    return ( 
        <Router>
            <div className="App">
                <Layout>         
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/vaccine">
                            <Vaccine/>
                        </Route>
                        <Route path="/news">
                            <News/>
                        </Route>
                    </Switch>
                </Layout>
            </div>
        </Router>
     );
}
 
export default App ;