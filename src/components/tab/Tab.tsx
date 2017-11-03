import * as React from "react";
import { Link } from "react-router-dom";

//import "components/navbar/tab.less";
import "components/tab/tab.less";
import ModuleHelper from "utils/ModuleHelper";
import CoreComponent from "components/CoreComponent";

ModuleHelper.addModule({
    id: "25",
    name: "Core Component",
    path: "/core-component",
    component: CoreComponent
});

const modules = ModuleHelper.getModules();
const Tab = () => {
    var figureStyle = {textAlign: "center"}
    return (<div>
        <li>
        {modules.map((app) => <Link to={app.path}>{app.name}</Link>)}
        </li>
    </div>);
};

export default Tab;

{/* <li *ngFor="let tab of tabs">
    <a *ngIf="tab.path" class="visible-sm visible-md visible-lg" (click)="toggleMenu(tab)"
       [routerLink]="[tab.path]">
        <figure style="text-align: center">
            <i class="{{tab.image}}"></i>
            <figcaption>{{tab.name}}</figcaption>
        </figure>
    </a>

    <a *ngIf="!tab.path" class="visible-sm visible-md visible-lg" (click)="toggleMenu(tab)">
        <figure style="text-align: center">
            <i class="{{tab.image}}"></i>
            <figcaption>{{tab.name}}</figcaption>
        </figure>
    </a>
    <div [hidden]="!tab.expanded">
        <tab *ngIf="tab.tabs" [tabsChild]="tab.tabs"></tab>
    </div>
</li> */}