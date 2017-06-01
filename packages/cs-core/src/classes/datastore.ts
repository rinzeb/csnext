export interface IDataSource {
    id: string;
    type: string;
    data: object;
}

export class DataSourceBase implements IDataSource {
    id: string;
    type: string;
    data: object;
}

export class DynamicDataSourceBase extends DataSourceBase {
    constructor() {
        super();
    }

}
