import * as express from "express";

// Controllers
import { TaskController } from '../controllers/tasks.controller'

export class TaskRoutes {

    private tasksCtrl: TaskController  = new TaskController()

    public routes(api: express.Application): void {

        // Add new task
        api.post('/api/addNewTask', this.tasksCtrl.addNewTask)
        
        // Get all tasks
        api.get('/api/getTasks', this.tasksCtrl.getTasks)
        
        // Get task by Id
        api.get('/api/getTaskById/:id', this.tasksCtrl.getTaskById)
        
        // // Eliminar
        // router.delete('/product/:id', ProductsCtrl.deleteProduct)
        // // Update
        // router.update('/product/:id', ProductsCtrl.updateProduct)
        // // SignUp
        // router.post('/signUp', userCtrl.signUp)
        // // SignIn
        // router.post('/signIn', userCtrl.signIn)
    }
 }