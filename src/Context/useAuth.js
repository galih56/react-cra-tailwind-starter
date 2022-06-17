import React, {createContext ,useReducer,useContext} from 'react';

const authState = {
  access_token: "",
  token_type: "",
  expires_in: "",
  user:{
    id: null,
    name : "",
    nik: '',
    no_kk: '',
    no_hp : '',
    alamat : '',
    jenis_kelamin: '',
    nik: '',
    email: "",
    role: "",
    email_verified_at: null,
    sso_id: "", 
  },
};


const authReducer = (state = authState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'store': {
      localStorage.setItem('auth', JSON.stringify(payload));
      return {
        ...state,
        ...payload
      };
    }
    case 'flush': {
      localStorage.removeItem('auth');
      return authState;
    }
    case 'update': {
      return {
        ...state,
        ...payload,
        user: { ...payload.user }
      };
    }
    default:
      return state;
  }
};


const AuthContext = createContext(authState);

const withAuth = (Child) => (props) => (
  <AuthContext.Consumer>
    {(context) => <Child {...props} {...context} />}
    {/* Another option is:  {context => <Child {...props} context={context}/>}*/}
  </AuthContext.Consumer>
);

const AuthProvider=({children})=>{
  const [state, dispatch] = useReducer(authReducer, authState);
  return(
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return {
    auth : context.state,
    authDispatch : context.dispatch
  }
}

export {authState, AuthContext, authReducer, useAuth, withAuth};
export default AuthProvider;