import * as express from "express";
import * as bodyParser from "body-parser";
import { TaskRoutes as Routes } from "./routes/task";
import * as mongoose from "mongoose";
import * as cors from "cors";
// import * as morgan from 'morgan'

class App {

    public app: express.Application = express();
    public routePrv: Routes = new Routes();
    public mongoUrl: string = 'mongodb://localhost:27017/task-planer_db';

    constructor() {
        this.config();
        this.mongoSetup();
        this.routePrv.routes(this.app);     
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // this.app.use(morgan('short'));
        this.app.use(cors({origin: '*'}));

        // serving static files 
        this.app.use(express.static('public'));
    }

    private mongoSetup(): void{
        mongoose.connect(this.mongoUrl, (err) => {
            if (err) {
                return console.log(`Error al conectar con la bd: ${err}`)
            } else {
                console.log("DB connected ...");
            }
        });        
    }
}

export default new App().app;
