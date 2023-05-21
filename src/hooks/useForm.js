import { useCallback, useState } from 'react';

export default function useForm() {
  const [values, setValues] = useState({});

  const handleChange = useCallback((event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  return { values, handleChange, setValues };
}
