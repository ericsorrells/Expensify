import { firebase, googleAuthProvider } from '../firebase/firebase';

export const startLogin = () => {
  return () => {
    // sign in to account using google, and use a popup
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};