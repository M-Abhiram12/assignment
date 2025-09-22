
export interface InputFieldProps {
  value?: string ;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | number;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string | number;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
}

export interface FormErrors {
  username: string;
  password: number ;
}


