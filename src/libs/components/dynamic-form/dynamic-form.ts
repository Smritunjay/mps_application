import { Component, CUSTOM_ELEMENTS_SCHEMA, forwardRef, Input, NO_ERRORS_SCHEMA, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormGroup, FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { FieldMapper } from '../../models/field-mapper';
import { CommonModule, NgClass } from '@angular/common';
import { DynamicFields } from '../../directives/dynamic-fields';

@Component({
  selector: 'app-dynamic-form',
  imports: [
    FormsModule, 
    ReactiveFormsModule,
    NgClass,
    CommonModule, 
    forwardRef(() => DynamicFields)],
  templateUrl: './dynamic-form.html',
  styleUrl: './dynamic-form.scss',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DynamicFormComponent),
      multi: true,
    }
  ]
})
export class DynamicFormComponent implements ControlValueAccessor, OnChanges {
  @Input() formGroup!: FormGroup;
  @Input() fields!: FieldMapper[];
  @Input() addtionalMapper!: { [key: string]: any } | undefined;
  @Input() additionalData!: { [key: string]: any };
  formValue!: any;

  public onTouched: any = () => { };
  public onChange: any = () => { };
  public onValidatorChange: any = () => { };

  ngOnChanges(changes: SimpleChanges): void {
    if (this.additionalData) {
    }
  }

  // Implement the ControlValueAccessor interface methods here
  writeValue(value: any): void {
    setTimeout(() => {
      this.formValue = value;
    });
  }

  registerOnChange(fn: (value: any) => void): void {
    // Logic to register change handler
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    // Logic to register touched handler
  }

  registerOnValidatorChange(fn: () => void): void {
    // Logic to register validator change handler
    this.onValidatorChange = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // Logic to disable the form
  }

}
