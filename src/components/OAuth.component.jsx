import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../utils/firebase.utils';
import { toast } from 'react-toastify';
import googleIcon from '../assets/svg/googleIcon.svg';

function OAuth() {
  const navigate = useNavigate();
  const location = useLocation();

  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const googleProvider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // check for user
      const docRef = doc(db, 'users', user.uid);
      const docSnapShot = await getDoc(docRef);

      // if user does not exists , create user
      if (!docSnapShot.exists()) {
        await setDoc(doc(db, 'users', user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      toast.success('Authorize Accepted');
      navigate('/');
    } catch (error) {
      toast.error('Could not authorize with google');
    }
  };

  return (
    <div className="socialLogin">
      <p>Sign {location.pathname === '/sign-up' ? 'up' : 'in'} with</p>
      <button className="socialIconDiv" onClick={onGoogleClick}>
        <img className="socialIconImg" src={googleIcon} alt="google" />
      </button>
    </div>
  );
}

export default OAuth;
