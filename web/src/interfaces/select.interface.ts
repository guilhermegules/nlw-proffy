import { SelectHTMLAttributes } from 'react';

type Options = {
  value: string | number;
  label: string;
};

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Options[];
}
