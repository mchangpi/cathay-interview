/** Please write the sample code to debounce handleOnChange **/
/*
var SearchBox = React.createClass({
  render: function () {
    return <input type="search" name="p" onChange={this.handleOnChange} />;
  },
  handleOnChange: function (event) {
    // make ajax call
  },
});
*/

/* ANSWER */

import { useState, useEffect } from 'react';

export default function SearchBox() {
  const [fetchState, setFetchState] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  function handleOnChange(event) {
    // make ajax call
    setSearchQuery(event.target.value);
  }

  useEffect(() => {
    const getData = setTimeout(async () => {
      const response = await fetch(
        `https://api.postalpincode.in/pincode/${searchQuery}`,
      );
      const parsedData = await response.json();
      setFetchState(parsedData[0].Message);
      console.log(parsedData[0].Message);
    }, 2000);

    return () => clearTimeout(getData);
  }, [searchQuery]);

  return (
    <>
      <p>{`Fetch PIN Code ${searchQuery} after 2 sec`}</p>
      <p>{`Results: ${fetchState}`}</p>
      <input
        type="search"
        name="p"
        onChange={handleOnChange}
        value={searchQuery}
        placeholder="800001"
      />
    </>
  );
}
