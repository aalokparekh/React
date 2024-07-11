import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import GoogleButton from 'react-google-button';
import { auth, provider } from '../services/firebase';

const Googlebutton = () => {

    const handlesignup = () => {
        signInWithPopup(auth,provider)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      };
  return (
    <div>
    <GoogleButton  onClick={handlesignup} />
    </div>
  )
}

export default Googlebutton
