import { IDataSource } from './datastore';

export class Project {

    public Title: string;
    public DataSources : { [id : string] : IDataSource}

    public constructor() {
        console.log('create project 2');
    }

    public Init() {
        console.log("init project");
    }

}



