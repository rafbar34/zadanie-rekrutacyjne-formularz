export interface FormInterface {
  login: string;
  password: string;
  tel: number | string;
  email: string;
  isAccepted: boolean;
}
export interface AvatarInterface<T> {
  name: string;
  birth_year: number | string;
  eye_color: string;
}
