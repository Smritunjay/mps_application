import { Component } from '@angular/core';
import { BasicReusableComponent } from '../../basic-reusable-component/basic-reusable-component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  standalone: true,
})
export class Button extends BasicReusableComponent {
  variant: string = 'primary';
  colorTheme: string = 'default';

  override ngOnInit(): void {
    super.ngOnInit();
    this.variant = this.field.variant || 'primary';
    this.colorTheme = this.field.colorTheme || 'default';
  }

  onBtnClick() {
    this.control.patchValue(true)
  }
}
