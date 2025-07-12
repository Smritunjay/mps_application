import { Component, OnInit } from '@angular/core';
// import { BasicReusableComponent } from '../../../../libs/components/basic-reusable-component/basic-reusable-component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from '../../../../libs/components/dynamic-form/dynamic-form';
// import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, DynamicFormComponent],
  templateUrl: './task.html',
  styleUrl: './task.scss'
})
export class TaskComponent implements OnInit {
  formData: FormControl = new FormControl();
  fields: any = [];
  formGroup!: FormGroup;
  taskFieldMetaData = {
    status: 200,
    message: 'Data fetched successfully',
    data: [
      {
        type: 'input',
        label: 'Task Name',
        name: 'taskName',
        placeholder: 'Enter task name',
        required: true,
      },
      {
        type: 'input',
        label: 'Description',
        name: 'description',
        placeholder: 'Enter task description',
        required: false
      },
      {
        type: 'checkbox',
        label: 'Status',
        name: 'status',
        required: false
      },
      {
        type: 'button',
        label: 'Save Task',
        name: 'saveTask',
        variant: 'primary',
        colorTheme: 'default',
      }
    ]
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({});
    console.log('TaskComponent initialized');
    this.formGroup = new FormGroup({});
    this.fields = this.taskFieldMetaData.data;
  }
}
