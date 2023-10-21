// useTerra.ts
import { useContext } from 'react';
import TerraContext from '@/context/terra-context';
import Terra from 'terra-api';

const useTerra = (): Terra => {
  const terra = useContext(TerraContext);
  if (!terra) {
    throw new Error("useTerra must be used within a TerraProvider");
  }
  return terra;
};

export default useTerra;
