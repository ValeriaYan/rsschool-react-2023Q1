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
      emptyNameField: false,
      emptyDateField: false,
      emptyConfirmCheckbox: false,
      emptyRadioFields: false,
      cardCreated: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  checkFields() {
    let isOk = false;
    if (this.textRef.current && this.textRef.current.value === '') {
      this.setState({
        emptyNameField: true,
      });
      isOk = false;
    } else {
      this.setState({
        emptyNameField: false,
      });
      isOk = true;
    }
    if (this.dateRef.current && this.dateRef.current.value === '') {
      this.setState({
        emptyDateField: true,
      });
      isOk = false;
    } else {
      this.setState({
        emptyDateField: false,
      });
      isOk = true;
    }

    const radiosNotEmpty = this.radioRefs.some((elem) => elem.current?.checked);
    if (!radiosNotEmpty) {
      this.setState({
        emptyRadioFields: true,
      });
      isOk = false;
    } else {
      this.setState({
        emptyRadioFields: false,
      });
      isOk = true;
    }

    if (this.checkboxRef.current && !this.checkboxRef.current.checked) {
      this.setState({
        emptyConfirmCheckbox: true,
      });
      isOk = false;
    } else {
      this.setState({
        emptyConfirmCheckbox: false,
      });
      isOk = true;
    }

    return isOk;
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
        {this.state.emptyNameField && <div className="error">{'Name can not be empty'}</div>}
        <TextInput textRef={this.textRef} labelText="Name: " />
        {this.state.emptyDateField && <div className="error">{'Date can not be empty'}</div>}
        <DateInput dateRef={this.dateRef} labelText="Date of Birth: " />
        <SelectInput
          selectRef={this.selectRef}
          labelText="Choose country: "
          values={['Russian', 'Ukraine', 'USA', 'Belarus', 'Poland', 'Kazakhstan']}
        />
        {this.state.emptyRadioFields && <div className="error">{'Gender can not be empty'}</div>}
        <div className="radio-buttons">
          <RadioInputs radioRefs={this.radioRefs} name="gender" values={['man', 'woman']} />
        </div>
        <FileInput fileRef={this.fileRef} labelText="Choose user card image" />
        {this.state.emptyConfirmCheckbox && (
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
