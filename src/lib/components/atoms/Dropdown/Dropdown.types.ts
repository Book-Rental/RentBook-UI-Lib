export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps {
  label?: string;
  placeholder?: string;
  options: DropdownOption[];
  value?: string;
  disabled?: boolean;
  required?: boolean;
  onChange: (value: string) => void;
}