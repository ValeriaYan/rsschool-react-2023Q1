import React from 'react';
import { DateInput } from './dateInput/DateInput';
import { TextInput } from './textInput/TextInput';
import { SelectInput } from './selectInput/SelectInput';
import { CheckboxInput } from './checkboxInput/CheckboxInput';
import { RadioInputs } from './radioInput/RadioInputs';
import { FileInput } from './fileInput/FileInput';
import { User } from '../userCardList/UsersList';

type UserFormState = {
  emptyNameField?: boolean;
  emptyDateField?: boolean;
  emptyConfirmCheckbox?: boolean;
  emptyRadioFields?: boolean;
  cardCreated: boolean;
};

type UserFormProps = {
  updateData: (users: User) => void;
};
class UserForm extends React.Component<UserFormProps, UserFormState> {
  textRef: React.RefObject<HTMLInputElement>;
  dateRef: React.RefObject<HTMLInputElement>;
  selectRef: React.RefObject<HTMLSelectElement>;
  checkboxRef: React.RefObject<HTMLInputElement>;
  radioRefs: React.RefObject<HTMLInputElement>[];
  fileRef: React.RefObject<HTMLInputElement>;
  formRef: React.RefObject<HTMLFormElement>;
  errors: {
    emptyNameField: boolean;
    emptyDateField: boolean;
    emptyConfirmCheckbox: boolean;
    emptyRadioFields: boolean;
    emptySelectField: boolean;
  };
  constructor(props: UserFormProps) {
    super(props);
    this.textRef = React.createRef();
    this.dateRef = React.createRef();
    this.selectRef = React.createRef();
    this.checkboxRef = React.createRef();
    this.radioRefs = [React.createRef(), React.createRef()];
    this.fileRef = React.createRef();
    this.formRef = React.createRef();

    this.state = {
      cardCreated: false,
    };

    this.errors = {
      emptyNameField: false,
      emptyDateField: false,
      emptyConfirmCheckbox: false,
      emptyRadioFields: false,
      emptySelectField: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  checkFields() {
    if (this.textRef.current && this.textRef.current.value === '') {
      this.errors['emptyNameField'] = true;
    } else {
      this.errors['emptyNameField'] = false;
    }

    if (this.dateRef.current && this.dateRef.current.value === '') {
      this.errors['emptyDateField'] = true;
    } else {
      this.errors['emptyDateField'] = false;
    }

    const radiosNotEmpty = this.radioRefs.some((elem) => elem.current?.checked);
    if (!radiosNotEmpty) {
      this.errors['emptyRadioFields'] = true;
    } else {
      this.errors['emptyRadioFields'] = false;
    }

    if (this.checkboxRef.current && !this.checkboxRef.current.checked) {
      this.errors['emptyConfirmCheckbox'] = true;
    } else {
      this.errors['emptyConfirmCheckbox'] = false;
    }

    if (this.selectRef.current && this.selectRef.current.value == 'default') {
      this.errors['emptySelectField'] = true;
    } else {
      this.errors['emptySelectField'] = false;
    }

    console.log(this.selectRef?.current?.value);
    return (
      !this.errors['emptyNameField'] &&
      !this.errors['emptyDateField'] &&
      !this.errors['emptyRadioFields'] &&
      !this.errors['emptyConfirmCheckbox']
    );
  }

  onSubmit(event: React.FormEvent) {
    event?.preventDefault();
    if (this.checkFields()) {
      let gender: string | undefined;
      for (let i = 0; i < this.radioRefs.length; i++) {
        if (this.radioRefs[i].current?.checked) {
          gender = this.radioRefs[i].current?.value;
        }
      }
      let photo = '';
      if (this.fileRef.current?.files?.item(0)) {
        photo = URL.createObjectURL(this.fileRef.current?.files?.item(0) as Blob);
      }
      this.props.updateData({
        name: this.textRef.current?.value,
        date: this.dateRef.current?.value,
        gender: gender,
        img: photo,
        country: this.selectRef.current?.value,
      });

      this.setState({
        cardCreated: true,
      });
      this.formRef.current?.reset();
    }
    this.setState({
      cardCreated: false,
    });
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.setState({
        cardCreated: false,
      });
    }, 3000);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} ref={this.formRef}>
        {this.errors['emptyNameField'] && <div className="error">{'Name can not be empty'}</div>}
        <TextInput textRef={this.textRef} labelText="Name: " />
        {this.errors['emptyDateField'] && <div className="error">{'Date can not be empty'}</div>}
        <DateInput dateRef={this.dateRef} labelText="Date of Birth: " />
        {this.errors['emptySelectField'] && (
          <div className="error">{'Country can not be empty'}</div>
        )}
        <SelectInput
          selectRef={this.selectRef}
          labelText="Choose country: "
          values={['Russian', 'Ukraine', 'USA', 'Belarus', 'Poland', 'Kazakhstan']}
        />
        {this.errors['emptyRadioFields'] && (
          <div className="error">{'Gender can not be empty'}</div>
        )}
        <div className="radio-buttons">
          <RadioInputs radioRefs={this.radioRefs} name="gender" values={['man', 'woman']} />
        </div>
        <FileInput fileRef={this.fileRef} labelText="Choose user card image" />
        {this.errors['emptyConfirmCheckbox'] && (
          <div className="error">
            {'You must confirm that you agree to the processing of personal data'}
          </div>
        )}
        <CheckboxInput checkboxRef={this.checkboxRef} labelText="I consent to my personal data" />
        <button type="submit">Create User Card</button>
        {this.state.cardCreated && <div className="success-message">{'Card created'}</div>}
      </form>
    );
  }
}

export { UserForm };
