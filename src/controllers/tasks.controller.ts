// import taskModel from '../models/tasks.model'
import * as mongoose from 'mongoose';
import { taskModelSchema } from '../models/tasks.model';
import { Request, Response } from 'express';

// Compilar el modelo (tasks => nombre de la tabla en la bd)
const TaskModel = mongoose.model('tasks', taskModelSchema);

export class TaskController{

    // private result (err, result, res: Response) {
    //     if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    //     if(!result) return res.status(404).send({message: 'No existen tareas'})

    //     res.status(200).send({ result }) 
    // }

    public addNewTask(req: Request, res: Response) {
        let task = new TaskModel(req.body);
    
        task.save((err, result) => {
            if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
            if(!result) return res.status(404).send({message: 'No existen tareas'})

            res.status(200).send({ result })
        })
    }

    public getTasks(req: Request, res: Response) {
        TaskModel.find({}, (err, result) => {
            if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
            if(!result) return res.status(404).send({message: 'No existen tareas'})
    
            res.status(200).send({ result }) 
        });
    }

    public getTaskById(req: Request, res: Response) {
        let taskId = req.params.id
        TaskModel.findById(taskId, (err, result) => {
            if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
            if(!result) return res.status(404).send({message: 'No existen tareas'})
    
            res.status(200).send({ result }) 
        });
    }
}