// suppose url: https://example.com/path?myParam=hello

import { useState, useEffect } from 'react';

function MyComponent() {
  const [myParam, setMyParam] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const myParamValue = queryParams.get('myParam');
    setMyParam(myParamValue);
  }, []);

  return (
    <div>
      <p>Query parameter value: {myParam}</p>
    </div>
  );
}

export default MyComponent;
