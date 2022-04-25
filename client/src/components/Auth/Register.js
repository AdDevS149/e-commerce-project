import { useRef, useState, useEffect } from 'react';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';



        //   This example requires updating your template:
  
        //   ```
        //   <html class="h-full bg-gray-50">
        //   <body class="h-full">
        //   ```
     

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
    // Focus on userinput when component loads/gather prior info
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  // focus on input field or not / similiar hover: active
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    //   focus when component loads
    userRef.current.focus();
  }, []);


// Valid userName - state is set in [], after its entry
// any time value changes in [] will check validation of the field  
  useEffect(() => {
      setValidName(USER_REGEX.test(user));
  }, [user])

  useEffect(() => {
      setValidPwd(PWD_REGEX.test(pwd));
      setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd])

  useEffect(() => {
      setErrMsg('');
  }, [user, pwd, matchPwd])

const onSubmitHandler = async (e) => {
    e.preventDefault();
       // if button enabled with JS hack
       const v1 = USER_REGEX.test(user);
       const v2 = PWD_REGEX.test(pwd);
       if (!v1 || !v2) {
           setErrMsg("Invalid Entry");
           return;
       }
}

  console.log("  Qa@33bbp    ") 


  return (
      <> 
      
    <section>
     

      <div className='min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <img className='mx-auto h-12 w-auto' src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg' alt='Workflow' />
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Create An Account</h2>
          {/* <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                start your 14-day free trial
              </a>
            </p> */}
        </div>
        <p ref={errRef} className={errMsg ? 'errmsg' : 
        // assertive when set focus on elememt announced to the screen reader
        'offscreen'} aria-live='assertive'>
          {errMsg}
        </p>

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
            <form className='space -y-6' onSubmit={onSubmitHandler}>
              <div>
                <label htmlFor='username' className='block text-sm font-medium text-gray-700'>
                  Username:
                  <FontAwesomeIcon icon={faCheck} className={validName ? 'valid' : 'hide'} />
                  <FontAwesomeIcon icon={faTimes} className={validName || !user ? 'hide' : 'invalid'} />
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    id='username'
                    ref={userRef}
                    autoComplete='off'
                    onChange={(e) => setUser(e.target.value)}
                    required
                    // set state when component loads / helps the screen reader
                    aria-invalid={validName ? 'false' : 'true'}

                    // provide requirements for form entry and allows screen reader
                    aria-describedby='uidnote'
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />

                  <p id='uidnote' className={userFocus && user && !validName ? 'instructions' : 'offscreen'}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    4 to 24 characters.
                    <br />
                    Must begin with a letter.
                    <br />
                    Letters, numbers, underscores, hyphens allowed.
                  </p>
                </div>
              </div>

              <div>
                <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                  Password
                  <FontAwesomeIcon icon={faCheck} className={validPwd ? 'valid' : 'hide'} />
                  <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? 'hide' : 'invalid'} />
                </label>
                <div className='mt-1'>
                  <input
                    type='password'
                    id='password'
                    onChange={(e) => setPwd(e.target.value)}
                    // value={pwd}
                    required
                    aria-invalid={validPwd ? 'false' : 'true'}
                    aria-describedby='pwdnote'
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                  <p id='pwdnote' className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    8 to 24 characters.
                    <br />
                    Must include uppercase and lowercase letters, a number and a special character.
                    <br />
                    Allowed special characters: <span aria-label='exclamation mark'>!</span> <span aria-label='at symbol'>@</span> <span aria-label='hashtag'>#</span>{' '}
                    <span aria-label='dollar sign'>$</span> <span aria-label='percent'>%</span>
                  </p>

                  <label htmlFor='confirm_pwd'>
                    Confirm Password:
                    <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? 'valid' : 'hide'} />
                    <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? 'hide' : 'invalid'} />
                  </label>
                  <input
                    type='password'
                    id='confirm_pwd'
                    onChange={(e) => setMatchPwd(e.target.value)}
                    // value={matchPwd}
                    required
                    aria-invalid={validMatch ? 'false' : 'true'}
                    aria-describedby='confirmnote'
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                  <p id='confirmnote' className={matchFocus && !validMatch ? 'instructions' : 'offscreen'}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Must match the first password input field.
                  </p>
                </div>
              </div>

              <div>
                        {/* //   className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' */}
                <button
                  disabled={!validName || !validPwd || !validMatch ? true : false}>
                  Sign up
                </button>

            
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  {/*                 
                  <input id='remember-me' name='remember-me' className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded' /> */}
                  {/* <label htmlFor='remember-me' className='ml-2 block text-sm text-gray-900'> */}

                  <Link to='sign-in' className='font-medium text-indigo-600 hover:text-indigo-500'>
                    Already registered?
                  </Link>

                  {/* </label> */}
                </div>

                {/* <div className='text-sm'>
                  <a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
                    Forgot your password?
                  </a>
                </div> */}
              </div>

              <div>
              <button
                //   enabled={!validName ||!validPwd || !validMatch ? false : true}
                  //   type='submit'
                  className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Sign in
                </button>
              </div>

                  {/* <button disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button> */}
            </form>

            <div className='mt-6'>
              <div className='relative'>
                <div className='absolute inset-0 flex items-center'>
                  <div className='w-full border-t border-gray-300' />
                </div>
                <div className='relative flex justify-center text-sm'>
                  <span className='px-2 bg-white text-gray-500'>Or continue with</span>
                </div>
              </div>

              <div className='mt-6 grid grid-cols-3 gap-3'>
                <div>
                  <a href='#' className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
                    <span className='sr-only'>Sign in with Facebook</span>
                    <svg className='w-5 h-5' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </a>
                </div>

                <div>
                  <a href='#' className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
                    <span className='sr-only'>Sign in with Twitter</span>
                    <svg className='w-5 h-5' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84' />
                    </svg>
                  </a>
                </div>

                <div>
                  <a href='#' className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
                    <span className='sr-only'>Sign in with GitHub</span>
                    <svg className='w-5 h-5' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
    </>
  );
};

export default Register;
