import axios from 'axios';
import { apiCamp } from '../store';

export const campRegister = (
  credentials,
  history,
  setIsSubmitting,
  setIsSuccess
) => {
  return () => {
    axios
      .post(apiCamp + '/register', credentials, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        const { data } = response;

        const { message } = data;
        if (data.status === 'FAILED') {
          setIsSuccess(false);
          setIsSubmitting(false);
        } else if (data.status === 'SUCCESS') {
          setIsSubmitting(false);
          setIsSuccess(true);

          // history.push('/');
        }
      })
      .catch((err) => {
        console.error(err);
        setIsSubmitting(false);
        setIsSuccess(true);
      });
  };
};
