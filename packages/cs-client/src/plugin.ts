
export interface IPlugin {
    id: string;

    Init();
    Start();
    Stop();
}

export class BasePlugin implements IPlugin {
    id: string;

    Init() {
        console.log("Init plugin");
    }

    Start() {

    }
    Stop() {

    }

}



