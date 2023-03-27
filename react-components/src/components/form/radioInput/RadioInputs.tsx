import React from 'react';

type RadioInputsProps = {
  radioRefs: React.RefObject<HTMLInputElement>[];
  name: string;
  values: string[];
};

class RadioInputs extends React.Component<RadioInputsProps> {
  render() {
    return (
      <>
        {this.props.values.map((elem, index) => {
          return (
            <label key={index}>
              <input
                type="radio"
                name={this.props.name}
                value={elem}
                ref={this.props.radioRefs[index]}
              />
              {elem}
            </label>
          );
        })}
      </>
    );
  }
}

export { RadioInputs };
