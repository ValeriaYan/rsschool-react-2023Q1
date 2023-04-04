import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  TextInput,
  DateInput,
  SelectInput,
  FileInput,
  RadioInputs,
  CheckboxInput,
} from './inputs/inputs';
import { User } from '../userCardList/UsersList';

type UserFormProps = {
  updateData: (users: User) => void;
};

export interface IFormValues {
  name: string;
  date: string;
  country: string;
  file: FileList;
  gender: string;
  confirm: boolean;
}

function UserForm(props: UserFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>();

  const [isSubmit, setSubmit] = useState(false);

  useEffect(() => {
    setTimeout(() => setSubmit(false), 2000);
  }, [isSubmit]);

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    props.updateData({
      name: data.name,
      date: data.date,
      gender: data.gender,
      img: URL.createObjectURL(data.file[0] as Blob),
      country: data.country,
    });
    setSubmit(true);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput register={register} label="Name: " value="name" required="Name can't be empty!" />
      <div className="error">{errors?.name && <p>{errors.name.message || 'Error!'}</p>}</div>
      <DateInput
        register={register}
        label="Date of Birth: "
        value="date"
        required="Date can't be empty!"
      />
      <div className="error">{errors?.date && <p>{errors.date.message || 'Error!'}</p>}</div>
      <SelectInput
        label="Choose your country: "
        value="country"
        register={register}
        values={['Russian', 'Ukraine', 'USA', 'Belarus', 'Poland', 'Kazakhstan']}
        required="Country can't be empty!"
      />
      <div className="error">{errors?.country && <p>{errors.country.message || 'Error!'}</p>}</div>
      <RadioInputs
        register={register}
        name="gender"
        value="gender"
        values={['man', 'woman']}
        required="Gender can't bу empty!"
      />
      <div className="error">{errors?.gender && <p>{errors.gender.message || 'Error!'}</p>}</div>
      <FileInput
        register={register}
        label="Choose file"
        value="file"
        required="Please, choose file!"
      />
      <div className="error">{errors?.file && <p>{errors.file.message || 'Error!'}</p>}</div>
      <CheckboxInput
        register={register}
        label="I consent to my personal data"
        value="confirm"
        required
      />
      <div className="error">{errors?.confirm && <p>{errors.confirm.message || 'Error!'}</p>}</div>
      {isSubmit && <p className="success-message">The card has been created!</p>}
      <button type="submit">Create User Card</button>
    </form>
  );
}

export { UserForm };
