import React from "react";
import { InputFieldProps } from "../types/InputField";


const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = "outlined",
  size = "md",
}) => {

  const baseStyles = "rounded px-3 py-2 outline-none transition-colors w-full";
  
  const sizeStyles = {
    sm: "text-sm py-1 mt-2",
    md: "md-sty",
    lg: "text-lg py-3 mt-2",
  };

  const variantStyles = {
    filled: "bg-gray-100 border border-gray-300",
    outlined: "input-field",
    ghost: "bg-transparent border-b border-gray-400",
  };

  const errorStyles = invalid ? "border-red-500" : "";

  return (
    <div className="mb-4">
      {label && <label className="label-text">{label}</label>}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${errorStyles}`}
      />
      {helperText && !invalid && <p className="helper-text">{helperText}</p>}
      {invalid && errorMessage && <p className="error-msge">{errorMessage}</p>}
    </div>
  );
};

export default InputField;
