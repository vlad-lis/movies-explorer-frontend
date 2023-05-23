/* eslint-disable */
import { useCallback, useState, useMemo, useRef } from 'react';

export default function useFormWithValidation(initialvalue = {}) {
  const [values, setValues] = useState(initialvalue);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const initialState = useRef(initialvalue);

  const handleChange = useCallback((event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: target.validationMessage }));
    setIsValid(target.closest('form').checkValidity());
  }, []);

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid],
  );

  const isDirty = useMemo(() => {
    const initial = initialState.current;

    return Object.keys(values).some((key) => {
      return !initial[key] || initial[key] !== values[key]
    })
  }, [values]);

  return {
    values, handleChange, errors, isValid, resetForm, isDirty, initialState,
  };
}
