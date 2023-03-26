import React from 'react';

type SelectInputProps = {
  selectRef: React.RefObject<HTMLInputElement>;
  labelText: string;
  values: string[];
};

class SelectInput extends React.Component<SelectInputProps> {
  constructor(props: SelectInputProps) {
    super(props);
  }

  render() {
    return (
      <label>
        {this.props.labelText}
        <select>
          {this.props.values.map((item, index) => {
            return (
              <option value="item" key={index}>
                {item}
              </option>
            );
          })}
        </select>
      </label>
    );
  }
}

export { SelectInput };
