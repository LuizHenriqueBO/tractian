import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import Router from 'next/router';

import { recoverUserInformation, signRequest } from "../Services/auth";
import { api } from "../Services/api";
import HomeDisclosure from "../Component/HomeDisclosure";


type User = {
  name: string;
  email: string;
  avatar_url: string;
}

type SignInData = {
  email: string;
  password: string;
}

type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
  signIn: (data: SignInData) => Promise<void>
  signOut: Function
}


export const AuthContext = createContext( {} as AuthContextType );


export function AuthProvider({ children }) {
  
  
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user;
  useEffect(() => {
    const { 'tractian.token': token } = parseCookies();
    if(token) {
      recoverUserInformation().then(response => {
        setUser(response.user)
      })
    }
  },[])


  async function signIn({email, password}: SignInData) {
    const { token, user } = await signRequest({email, password})
    /**
     * setCookie recebe 4 parâmetros,
     * 1 - contexto da requisição (se for frontend, colocar undefined)
     * 2 - nome do cookie que deseja salvar
     * 3 - o valor a ser salvo
     * 4 - configuração como tempo de expiração
     */
    setCookie(undefined, 'tractian.token', token, {
      maxAge: 60 * 60 * 1, // 1 hora
    });
  	api.defaults.headers['Authorization'] = `Bearer ${token}`;
    Router.push('/dashboard').then(() => {
      setUser(user);
    });
  }


  function signOut() {
    api.defaults.headers['Authorization'] = `Bearer ''`;
    destroyCookie(undefined, 'tractian.token')
  }

  
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {isAuthenticated ? <HomeDisclosure/> : null}
      {children}
    </AuthContext.Provider>
  );
}
