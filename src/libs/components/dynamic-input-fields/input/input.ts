import { Component } from '@angular/core';
import { BasicReusableComponent } from '../../basic-reusable-component/basic-reusable-component';
import { NgClass } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './input.html',
  styleUrl: './input.scss'
})
export class InputComponent extends BasicReusableComponent {
  errorMessage: string = '';
}
