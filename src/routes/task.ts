// Controllers
import { TaskController } from '../controllers/tasks.controller'

export class TaskRoutes {

    private tasksCtrl: TaskController
    private url = "/api/task"

    constructor() {
        this.tasksCtrl = new TaskController()
    }

    public routes(api: any): void {
  
        // Add new task
        api.post(`${this.url}/addNewTask`, this.tasksCtrl.addNewTask)
        
        // // Get all tasks
        api.get(`${this.url}/getTasks`, this.tasksCtrl.getTasks)
        
        // // Get task by Id
        api.get(`${this.url}/getTaskById/:id`, this.tasksCtrl.getTaskById)
    }
}