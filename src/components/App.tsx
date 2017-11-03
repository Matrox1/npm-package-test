import * as React from "react";
//import { Router, Route } from "react-router";
import {BrowserRouter} from "react-router-dom";
//import HashRouter from "react-router-dom";

import Navbar from "components/navbar/Navbar";
import Content from "components/content/Content";
// import ModuleHelper from "utils/ModuleHelper";
// import CoreComponent from "components/CoreComponent";
import "components/App.less";

//const modules = ModuleHelper.getModules();
// ModuleHelper.addModule({
//     id: "25",
//     name: "Core Component",
//     path: "/core-component",
//     component: CoreComponent
// });

const App = () => {
    //const moduleComponents = modules.map(m => <m.component />);

    return (
        // <div>
        //     <Navbar />
        //     <Hello name="Simple App" />
        //     { moduleComponents }
        // </div>
        <BrowserRouter>
        <div className='container'>
        <nav id="sideNavParent" className="lp-wrapper">
        <Navbar />
        </nav>
        <div className='container body-content'>
            <div className="row container-height">
                <Content />
            </div>
        </div>
        </div>
        </BrowserRouter>
    );
};

export default App;