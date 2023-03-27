import React from 'react';

type CheckboxInputProps = {
  checkboxRef: React.RefObject<HTMLInputElement>;
  labelText: string;
};

class CheckboxInput extends React.Component<CheckboxInputProps> {
  render() {
    return (
      <label>
        {this.props.labelText}
        <input type="checkbox" ref={this.props.checkboxRef} />
      </label>
    );
  }
}

export { CheckboxInput };
