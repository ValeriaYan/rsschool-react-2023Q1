import React from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { IFormValues } from '../UserForm';

type TextInputProps = {
  register: UseFormRegister<IFormValues>;
  value: Path<IFormValues>;
  label: string;
  required: string | boolean;
};

type DateInputProps = {
  register: UseFormRegister<IFormValues>;
  value: Path<IFormValues>;
  label: string;
  required: string | boolean;
};

type SelectInputProps = {
  register: UseFormRegister<IFormValues>;
  value: Path<IFormValues>;
  label: string;
  values: string[];
  required: string | boolean;
};

type FileInputProps = {
  register: UseFormRegister<IFormValues>;
  value: Path<IFormValues>;
  label: string;
  required: string | boolean;
};

type RadioInputsProps = {
  register: UseFormRegister<IFormValues>;
  value: Path<IFormValues>;
  name: string;
  values: string[];
  required: string | boolean;
};

type CheckboxInputProps = {
  register: UseFormRegister<IFormValues>;
  value: Path<IFormValues>;
  label: string;
  required: string | boolean;
};

function TextInput({ label, value, register, required }: TextInputProps) {
  return (
    <label>
      {label}
      <input type="text" {...register(value, { required })} />
    </label>
  );
}

function DateInput({ label, value, register, required }: DateInputProps) {
  return (
    <label>
      {label}
      <input type="date" {...register(value, { required })} />
    </label>
  );
}

function SelectInput({ label, value, register, required, values }: SelectInputProps) {
  return (
    <label>
      {label}
      <select
        {...register(value, {
          required,
          validate: {
            validateValue: (v) => {
              return v !== 'default' || 'Please, choose country!';
            },
          },
        })}
      >
        <option value="default">{'--choose--'}</option>
        {values.map((item, index) => {
          return (
            <option value={item} key={index}>
              {item}
            </option>
          );
        })}
      </select>
    </label>
  );
}

function FileInput({ label, value, register, required }: FileInputProps) {
  return (
    <label>
      <span className="file-button">Choose file</span>
      {label}
      <input type="file" {...register(value, { required })} />
    </label>
  );
}

function RadioInputs({ name, value, values, register, required }: RadioInputsProps) {
  return (
    <div className="radio-buttons">
      {values.map((elem, index) => {
        return (
          <label key={index}>
            <input type="radio" name={name} value={elem} {...register(value, { required })} />
            {elem}
          </label>
        );
      })}
    </div>
  );
}

function CheckboxInput({ label, value, register, required }: CheckboxInputProps) {
  return (
    <label>
      {label}
      <input type="checkbox" {...register(value, { required })} />
    </label>
  );
}

export { TextInput, DateInput, SelectInput, FileInput, RadioInputs, CheckboxInput };
