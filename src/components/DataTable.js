import React, { useState } from 'react';
const DataTable = () => {
    const fetchData = async () => {
        let initialData=[];
        try {
          let response = await fetch("https://s3.amazonaws.com/open-to-cors/assignment.json");
          let initialData = await response.json();
          console.log(initialData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      
      // Call the function to fetch data
      fetchData();
      
      const [availableFields, setAvailableFields] = useState(['Title', 'Price', 'Popularity']);
      const [displayedFields, setDisplayedFields] = useState([]);
      const [tableData, setTableData] = useState();
    
      const moveField = (fromList, toList, field) => {
        const updatedFromList = fromList.filter((f) => f !== field);
        const updatedToList = [...toList, field];
        return { updatedFromList, updatedToList };
      };
    
      const handleMoveRight = () => {
        const { updatedAvailableFields, updatedDisplayedFields } = moveField(
          availableFields,
          displayedFields,
          availableFields[0]
        );
        setAvailableFields(updatedAvailableFields);
        setDisplayedFields(updatedDisplayedFields);
      };
    
      const handleMoveLeft = () => {
        const { updatedAvailableFields, updatedDisplayedFields } = moveField(
          displayedFields,
          availableFields,
          displayedFields[0]
        );
        setAvailableFields(updatedAvailableFields);
        setDisplayedFields(updatedDisplayedFields);
      };
    
      return (
        <div>
          <div>
            <button onClick={handleMoveRight}>&gt;&gt;</button>
            <button onClick={handleMoveLeft}>&lt;&lt;</button>
          </div>
          <div>
            <h3>Available Fields</h3>
            <ul>
              {availableFields.map((field) => (
                <li key={field}>{field}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Fields to be Displayed</h3>
            <ul>
              {displayedFields.map((field) => (
                <li key={field}>{field}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Data</h3>
            <table>
              <thead>
                <tr>
                  {displayedFields.map((field) => (
                    <th key={field}>{field}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.id}>
                    {displayedFields.map((field) => (
                      <td key={field}>{row[field.toLowerCase()]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
}

export default DataTable
