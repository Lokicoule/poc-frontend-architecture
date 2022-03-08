import { useState } from "react";

export const useDense = (init: boolean) => {
  const [dense, setDense] = useState(init);

  const handleChangeDense = () => {
    setDense(!dense);
  };

  return {
    dense,
    handleChangeDense,
  };
};
