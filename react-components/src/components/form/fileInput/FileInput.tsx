import React from 'react';

type FileInputProps = {
  fileRef: React.RefObject<HTMLInputElement>;
  labelText: string;
};

class FileInput extends React.Component<FileInputProps> {
  render() {
    return (
      <label>
        <span className="file-button">Choose file</span>
        {this.props.labelText}
        <input type="file" ref={this.props.fileRef} />
      </label>
    );
  }
}

export { FileInput };
