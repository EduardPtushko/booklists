export interface Book {
    title: string;
    author: string;
    ISBN: string;
    id: string;
}

export interface Validation {
    required: boolean;
    minLength: number;
    maxLength: number;
    isEmail: boolean;
    isNumeric: boolean;
}
