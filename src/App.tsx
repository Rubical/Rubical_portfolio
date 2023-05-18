import {ContentContainer} from "./components/Content";
import {Footer} from "./components/Footer/Footer";
import {Header} from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <div className="app">
            <Router>
                <Header/>
                <ContentContainer/>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
