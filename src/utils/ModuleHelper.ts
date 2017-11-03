export interface IModule {
    id: string;
    name: string;
    path: string;
    component: () => JSX.Element;
}

export default class ModuleHelper {
    static addModule(module: IModule) {
        if (!(global as any)[ModuleHelper.modulesNode]) {
            (global as any)[ModuleHelper.modulesNode] = [];
        }

        (global as any)[ModuleHelper.modulesNode].push(module);
    }

    static getModules(): IModule[] {
        return (global as any)[ModuleHelper.modulesNode] || [];
    }

    private static readonly modulesNode = "AbbModules";
}