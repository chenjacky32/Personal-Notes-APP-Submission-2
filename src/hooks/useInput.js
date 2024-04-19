import React from "react";

//custom hook
function useInput(defaultValue = "") {
  const [value, setValue] = React.useState(defaultValue);

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  return [value, handleValueChange];
}

export default useInput;
