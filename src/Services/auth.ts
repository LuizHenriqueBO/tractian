import {v4 as uuid} from 'uuid';

type SignInRequestData = {
  email: string,
  password: string
};

const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))

export async function signRequest(data: SignInRequestData) {
  await delay();

  return {
    token: uuid(),
    user: {
      name: 'Luiz Henrique',
      email: 'luiz@henrique.com',
      avatar_url: 'https://github.com/LuizHenriqueBO.png'
    }
  }
}


export async function recoverUserInformation() {
  await delay();

  return {
    user: {
      name: 'Luiz Henrique',
      email: 'luiz@henrique.com',
      avatar_url: 'https://github.com/LuizHenriqueBO.png'
    }
  }
}