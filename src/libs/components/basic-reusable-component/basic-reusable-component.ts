import { AbstractControl, FormControl, FormGroup } from "@angular/forms";
import { FieldMapper } from "../../models/field-mapper";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-basic-reusable',
    template: '',
    styleUrls: [],
    standalone: true
})

export class BasicReusableComponent implements OnInit {
    field!: FieldMapper;
    control: FormControl = new FormControl();
    formGroup!: FormGroup;
    parentValue!: AbstractControl;

    ngOnInit() {
        if (this.field) {
             this.createFormGroup(this.field);
        }
    }

    createFormGroup(field: FieldMapper): void {
        // Logic to create form group based on fields
        if (this.formGroup) {
            this.formGroup.addControl(field.name, new FormControl(null,
                BasicReusableComponent.bindValidations(field.validations)
            ));
            this.control = this.formGroup.get(field.name) as FormControl;
        }
    }

    bindControl(values: any) {
        this.getParentControlValue(this.control);
        this.parentValue.get(values)?.valueChanges.subscribe((value: any) => {
            console.log(value)
        });
    }

    getParentControlValue(control: AbstractControl): void {
        if (control.parent) {
            this.getParentControlValue(control.parent);
        } else {
            this.parentValue = control;
        }
    }

    bindValue(value: any): void {
        this.control?.patchValue(value[this.field.name]);
    }

    static bindValidations(validations: any): any {

    }

}