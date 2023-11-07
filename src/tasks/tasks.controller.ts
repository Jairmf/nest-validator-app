import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) {}
    
    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks();
    }

    @Post()
    createTask(@Body() newTask: CreateTaskDto){
        return this.tasksService.createTasks(newTask.title, newTask.description);
    }

    @Patch(':id')
    updateTask(@Param('id') id: string, @Body() updatedFields: UpdateTaskDto){
        return this.tasksService.updateTasks(id, updatedFields);
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string){
        return this.tasksService.deleteTasks(id);
    }
}
