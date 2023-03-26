import React from 'react';

type DateInputProps = {
  dateRef: React.RefObject<HTMLInputElement>;
  labelText: string;
};

class DateInput extends React.Component<DateInputProps> {
  constructor(props: DateInputProps) {
    super(props);
  }

  render() {
    return (
      <label>
        {this.props.labelText}
        <input type="date" ref={this.props.dateRef} />
      </label>
    );
  }
}

export { DateInput };
