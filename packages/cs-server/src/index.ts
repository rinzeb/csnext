import * as express from 'express';
import * as core from '@csnext/cs-core';

export class Server {
    public app: express.Express;

    public constructor() {


    }

    public Start() {
        
    }

    public Init() {
        this.app = express();
        this.app.listen(3003, () => {
            console.log('Listening on port 3003');
        });

    }

}
