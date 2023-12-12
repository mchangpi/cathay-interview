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

import { useState, useEffect } from "react";

export default function SearchBox() {
  const [fetchState, setFetchState] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  function handleOnChange(event) {
    // make ajax call
    setSearchQuery(event.target.value);
  }

  useEffect(() => {
    const getData = setTimeout(async () => {
      const response = await fetch(
        `https://api.postalpincode.in/pincode/${searchQuery}`
      );
      const parsedData = await response.json();
      setFetchState(parsedData[0].Message);
      console.log(parsedData[0].Message);
    }, 2000);

    return () => clearTimeout(getData);
  }, [searchQuery]);

  return (
    <>
      <p>{`Fetch After 2 sec: ${fetchState}`}</p>
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

/* 
Certainly! To debounce the handleOnChange function in your React component, you can use a debounce function from a utility library like lodash or you can create a simple debounce function yourself. Here's an example using a simple debounce function:

jsx
Copy code
var SearchBox = React.createClass({
  componentDidMount: function() {
    // Initialize the debounce function with a delay of 300 milliseconds
    this.debouncedHandleOnChange = this.debounce(this.handleOnChange, 300);
  },

  render: function() {
    return <input type="search" name="p" onChange={this.debouncedHandleOnChange} />;
  },

  handleOnChange: function(event) {
    // make ajax call
    console.log("Ajax call triggered with search term:", event.target.value);
  },

  debounce: function(func, delay) {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
});
In this example, the debounce function is a higher-order function that takes a function (func) and a delay in milliseconds (delay). It returns a new function that, when invoked, will delay calling the original function until after the specified delay. If the function is called again within the delay period, the timer is reset.

The componentDidMount lifecycle method is used to initialize the debounced version of the handleOnChange function with a delay of 300 milliseconds. This debounced function is then used as the onChange handler for the input element. Adjust the delay value according to your needs.

*/
