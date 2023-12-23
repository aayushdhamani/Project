// file.js
import React from 'react';
import FileUpload from './Fileupload'; // Assuming FileUpload component is in the same directory

function FilePage() {
  return (
    <div>
      <h2>Step1:</h2>
      <FileUpload />
      <p>Supported File Type(s):.CSV, .JSON</p>
      
    </div>
  );
}

export default FilePage;
