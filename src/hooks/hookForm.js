import { useState } from "react";

const useInputState = (defaultFormData) => {
  const [formData, setFormData] = useState({
    ...defaultFormData,
  });

  const [error, setError] = useState({});
  const [success, setSuccess] = useState({});

  const handleInputChange = (e) => {
    const propertyName = e.target.name;
    const propertyValue = e.target.value;

    setFormData({
      ...formData,
      [propertyName]: propertyValue,
    });
  };

  const handleInputBlur = (
    e,
    { errorMessage = "", successMessage = "", regex = "" }
  ) => {
    const inputValue = e.target.value;

    if (inputValue === "") {
      setError({
        ...error,
        [e.target.name + "ErrorMessage"]: errorMessage,
      });
    } else if (regex) {
      if (regex.test(inputValue)) {
        if (error[[e.target.name + "ErrorMessage"]]) {
          console.log("True");
          delete error[e.target.name + "ErrorMessage"];
          setError({
            ...error
          });
        }
      } else {
        setError({
          ...error,
          [e.target.name + "ErrorMessage"]: errorMessage,
        });
      }
    } else {
      delete error[e.target.name + "ErrorMessage"]
      setError({
        ...error
      })
    }

    if (successMessage) {
      setSuccess({
        [e.target.name + "successMessage"]: successMessage,
      });
    }
  };

  return {
    formData,
    error,
    setError,
    success,
    handleInputChange,
    handleInputBlur,
  };
};

export default useInputState;
