import React, { useState, useEffect } from 'react';
import DataTable from './components/DataTable';
import DisplayOptions from './components/DIsplayOptions';
import File from './components/file';
import Format from './components/Format';
const App = () => {
  const [products, setProducts] = useState([]);
  const [displayFields, setDisplayFields] = useState(['Title', 'Price']);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://s3.amazonaws.com/open-to-cors/assignment.json')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Product Data</h1>
      <div>
      <File/>
      </div>
      <div>
      <Format/>
      </div>
      
      
      <DisplayOptions
        displayFields={displayFields}
        setDisplayFields={setDisplayFields}
        allFields={['Subcategory', 'Title', 'Price', 'Popularity']}
      />
      <DataTable products={products} displayFields={displayFields} />
    </div>
  );
};

export default App;
