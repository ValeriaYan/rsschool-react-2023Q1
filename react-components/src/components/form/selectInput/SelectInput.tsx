import React from 'react';

type SelectInputProps = {
  selectRef: React.RefObject<HTMLSelectElement>;
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
        <select ref={this.props.selectRef}>
          <option value="default">{'--choose--'}</option>
          {this.props.values.map((item, index) => {
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
}

export { SelectInput };
