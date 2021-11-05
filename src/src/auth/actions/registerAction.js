import axios from 'axios';
import { sessionService } from 'redux-react-session';
import { apiCamp } from '../store';

export const campRegister = (credentials, history, setIsSubmitting) => {
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
          //Checking for specific erros

          alert(`FAILED\n` + message);
          console.log(message);
          //complete submission
          setIsSubmitting(false);
        } else if (data.status === 'SUCCESS') {
          setIsSubmitting(false);
          alert(`SUCCESS\n` + message);
          // console.log();
          history.push('/');
        }
      })
      .catch((err) => {
        console.error(err);
        setIsSubmitting(false);
      });
  };
};
