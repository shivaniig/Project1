import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataDisplay = ({ token }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/data', {
      headers: {
        'x-access-token': token,
      },
    })
    .then((response) => {
      setData(response.data);
      setLoading(false);
    })
    .catch((error) => {
      setError(error);
      setLoading(false);
    });
  }, [token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Data</h2>
      <ul>
        {data.map((item) => (
          <li key={item._id}>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>Phone: {item.phone}</p>
            <p>Date: {item.date}</p>
            <p>Time: {item.time}</p>
            <p>Donation Center: {item.donationCenter}</p>
            <p>Comments: {item.comments}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataDisplay;
