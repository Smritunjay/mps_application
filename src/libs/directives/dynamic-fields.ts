import { ComponentRef, Directive, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewContainerRef } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { isEqual } from 'lodash';
import { FieldMapper } from '../models/field-mapper';
import { InputComponent } from '../components/dynamic-input-fields/input/input';
import { Checkbox } from '../components/dynamic-input-fields/checkbox/checkbox';
import { Button } from '../components/dynamic-input-fields/button/button';

@Directive({
  selector: '[appDynamicField]'
})
export class DynamicFields implements OnInit, OnDestroy, OnChanges {
  @Input() field!: FieldMapper
  @Input() control!: AbstractControl;
  @Input() formGroup!: FormGroup;
  @Input() formValue!: any;
  @Input() additionalData!: { [key: string]: any };
  componentInstance!: ComponentRef<any>;

  constructor(public viewContainerRef: ViewContainerRef) { }

  componentMapper: { [key: string]: any } = {
    input: InputComponent,
    checkbox: Checkbox,
    button: Button,
  }

  ngOnInit(): void {
    Object.assign(this.componentMapper, {});
    this.componentInstance = this.viewContainerRef.createComponent(this.componentMapper[this.field.type]);
    if (this.field.fields) {
      this.componentInstance.instance.fields = this.field.fields;
    }
    if (this.additionalData) {
      this.componentInstance.instance.additionalData = this.additionalData;
    }
    this.componentInstance.instance.field = this.field;
    this.componentInstance.instance.formGroup = this.formGroup;
    this.componentInstance.instance.formValue = this.formValue;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['formValue']?.currentValue && (!isEqual(changes['formValue'].currentValue,
      changes['formValue'].previousValue
    )) && this.componentInstance) {
      this.componentInstance.instance.bindValue(changes['formValue']?.currentValue);
    }
  }

  ngOnDestroy(): void {
    this.componentInstance?.destroy();
    this.viewContainerRef.clear();
  }
}


