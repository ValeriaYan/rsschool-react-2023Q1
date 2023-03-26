import React from 'react';

type TextInputProps = {
  textRef: React.RefObject<HTMLInputElement>;
  labelText: string;
};
class TextInput extends React.Component<TextInputProps> {
  render() {
    return (
      <label>
        {this.props.labelText}
        <input type="text" ref={this.props.textRef} />
      </label>
    );
  }
}

export { TextInput };
