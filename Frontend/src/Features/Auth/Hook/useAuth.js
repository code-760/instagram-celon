import { useContext} from 'react';

import { Authcontext } from '../auth.context';
import { login, registr } from '../Services/api.auth';

export const useAuth = () => {
  const context = useContext(Authcontext) || {};

  const { user, loading, setuser, setloading } = context;

  const handellogin = async (name, password) => {
    setloading(true);
    const respons =await login(name, password);
    setuser(respons.data);
    setloading(false);
  };

  const handelregister = async (name, password, email) => {
    setloading(true);

    try {
      const respons = await registr(name, email, password);
      return respons.data;
    } finally {
      setloading(false);
    }
  };

  return {
    loading,
    user,
    handellogin,
    handelregister,
  };
};
