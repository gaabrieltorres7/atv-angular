import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent {
  tasks: Task[] = this.generateRandomTasks();
  newTask: string = '';

  private generateRandomTasks(): Task[] {
    const taskOptions = [
      'Ler um livro',
      'Fazer exercícios',
      'Escrever no diário',
      'Aprender algo novo',
      'Assistir a um filme'
    ];

    return taskOptions.map((taskText, index) => ({
      id: index + 1,
      text: taskText,
      completed: false
    }));
  }

  addTask() {
    if (this.newTask.trim() !== '') {
      const newTask: Task = {
        id: this.tasks.length + 1,
        text: this.newTask,
        completed: false
      };
      this.tasks.push(newTask);
      this.newTask = '';
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  completeTask(task: Task) {
    task.completed = !task.completed;
  }
}

interface Task {
  id: number;
  text: string;
  completed: boolean;
}