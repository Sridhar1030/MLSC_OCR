import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('file', event.target.file.files[0]);

      const response = await fetch('https://aspiring-ocr-97zq.onrender.com/extract', {
        method: 'POST',
        headers: {
          'X_api_key': 'LoUCOXUU8Ge5R9HeyobVUcY0KToFE2x3n1Sl8JdNe1JVgD35FiD9EX4tcmBhXjoq'
        },
        body: formData
      });

      const data = await response.json();
      setResponse(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <h2 className="title">API Request and Response</h2>
      <form onSubmit={handleSubmit} className="form">
        <input type="file" name="file" className="file-input" />
        <button type="submit" className="submit-button">Submit</button>
      </form>

      {response && (
        <div className="response-container">
          <h3 className="response-title">Response:</h3>
          <pre className="response-data">{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}

      {error && (
        <div className="error-container">
          <h3 className="error-title">Error:</h3>
          <p className="error-message">{error}</p>
        </div>
      )}
    </div>
  );
};

export default App;