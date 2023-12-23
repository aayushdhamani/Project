import React from 'react';

class FileUpload extends React.Component {
  handleFile = (event) => {
    const fileInput = event.target;
    
    // Check if a file is selected
    if (fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];
      
      // Check if the file type is either CSV or JSON
      if (selectedFile.type === 'application/json' || selectedFile.name.endsWith('.csv')) {
        // Read the contents of the file
        const reader = new FileReader();
        reader.onload = function (event) {
          const fileContent = event.target.result;
          
          // Process the file content as needed
          console.log('File Content:', fileContent);
        };
        
        // Read the file as text
        reader.readAsText(selectedFile);
      } else {
        alert('Please select a valid CSV or JSON file.');
      }
    } else {
      alert('Please select a file.');
    }
  };

  render() {
    return (
      <div>
        <input type="file" onChange={this.handleFile} accept=".csv, .json" />
        <button>Upload File</button>
      </div>
    );
  }
}

export default FileUpload;
