import * as React from "react";
import { Switch, Route } from 'react-router-dom';

// import "components/navbar/Navbar.less";
// import Tab from "components/tab/Tab";
import ModuleHelper from "utils/ModuleHelper";
const modules = ModuleHelper.getModules();
//const moduleComponents = modules.map(m => <m.component />);

const Content = () => (
     <div>
        <Switch>
            {modules.map(m => <Route path={m.path} component={m.component} />)}
        </Switch>
    </div>
    );

export default Content;