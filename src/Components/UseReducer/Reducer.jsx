import React, { useRef, useEffect } from 'react';

function MyForm() {
  const firstInputRef = useRef(null);

  useEffect(() => {
    // Focus on the first input field when the component mounts
    firstInputRef.current.focus();
  }, []);

  return (
    <form>
      <label htmlFor="firstName">First Name:</label>
      <input id="firstName" type="text" ref={firstInputRef} />

      <label htmlFor="lastName">Last Name:</label>
      <input id="lastName" type="text" />

      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
