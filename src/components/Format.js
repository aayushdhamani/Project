import React, { useState } from 'react';
import './Format.css';

const Format = () => {
  const [fileFormat, setFileFormat] = useState('csv');
  const [encoding, setEncoding] = useState('utf-8');
  const [delimiter, setDelimiter] = useState(',');
  const [hasHeader, setHasHeader] = useState(true);

  const handleFileFormatChange = (e) => {
    setFileFormat(e.target.value);
  };

  const handleEncodingChange = (e) => {
    setEncoding(e.target.value);
  };

  const handleDelimiterChange = (e) => {
    setDelimiter(e.target.value);
  };

  const handleHasHeaderChange = (e) => {
    setHasHeader(e.target.value === 'true');
  };

  return (
    <div>
      <label>
        File Format:
        <select value={fileFormat} onChange={handleFileFormatChange}>
          <option value="csv">CSV</option>
          <option value="json">JSON</option>
        </select>
      </label>
        <br />

      <label>
        Character Encoding:
        <select value={encoding} onChange={handleEncodingChange}>
          <option value="utf-8">UTF-8</option>
          {/* Add other encoding options as needed */}
        </select>
      </label>
<br />
      <label>
        Delimiter Type:
        <select value={delimiter} onChange={handleDelimiterChange}>
          <option value=",">Comma (,)</option>
          <option value=";">Semicolon (;)</option>
          {/* Add other delimiter options as needed */}
        </select>
      </label>
      <br />
      <label>
        Has Header:
        <div>
          <label>
            Yes
            <input
              type="radio"
              value={true}
              checked={hasHeader === true}
              onChange={handleHasHeaderChange}
            />
          </label>
          <br />
          <label>
            No
            <input
              type="radio"
              value={false}
              checked={hasHeader === false}
              onChange={handleHasHeaderChange}
            />
          </label>
        </div>
      </label>
    </div>
  );
};

export default Format;
