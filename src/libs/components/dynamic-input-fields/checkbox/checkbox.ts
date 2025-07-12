import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicReusableComponent } from '../../basic-reusable-component/basic-reusable-component';

@Component({
  selector: 'app-checkbox',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.scss',
  standalone: true
})
export class Checkbox extends BasicReusableComponent{

}
