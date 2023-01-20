import axios from 'axios';
import { ISignupProps } from '../pages/Signup/Signup';

export interface IUserSignup {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export const fetchUserSignup = async ({
  firstName,
  lastName,
  email,
  password,
  passwordConfirm,
  phoneNumber
}: ISignupProps): Promise<IUserSignup> => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    },
  };

  const body = JSON.stringify({
    firstName,
    lastName,
    email,
    password,
    passwordConfirm,
    phoneNumber
  })

  const response = await axios.post<IUserSignup>('http://localhost:3000/', body, config)
  console.log('account response:', response)

  return response.data
}