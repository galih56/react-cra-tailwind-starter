import React, {createContext ,useReducer,useContext, useEffect} from 'react';

const authState = {
  access_token: "",
  user:{
    id:null,
    email:'',
    first_name:'',
    last_name:'',
    avatar:'',
  }
};


const authReducer = (state = authState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'remember':{
      const auth=JSON.stringify(localStorage.getItem('auth'));
      return {
        ...state,
        ...auth
      }
    }
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

  useEffect(()=>{
    const auth=JSON.parse(localStorage.getItem('auth'));
    if(auth){
      context.dispatch({type:'remember'});
    }
  },[])
  
  return {
    auth : context.state,
    authDispatch : context.dispatch
  }
}

export {AuthProvider, authState, AuthContext, authReducer, useAuth, withAuth};