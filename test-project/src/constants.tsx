import { object, string } from "yup";

export const signInSchema = (emailIsRequired: string, emailValid: string) => {
  return object({
    email: string().email(emailValid).required(emailIsRequired),
  });
};
