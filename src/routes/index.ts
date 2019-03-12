// Routes
import { TaskRoutes } from "./task";

export class Routes {

    private taskRoutes: TaskRoutes

    constructor() {
        this.taskRoutes = new TaskRoutes()
    }

    public routes(app: any): void {    
        this.taskRoutes.routes(app);
    }
 }