export interface FieldMapper {
    type: string;
    name: string;
    label: string;
    fields?: FieldMapper[];
    validations?: [];
    componentClasses?: string;
    required?: any;
    placeholder?: string;
    leftImgSrc?: string;
    leftImgAlt?: string;
    variant?: string;
    colorTheme?: string;
}