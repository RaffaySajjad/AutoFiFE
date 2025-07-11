import {
  validateName,
  validateEmail,
  validatePhoneNumber,
  validatePostCode,
} from "@/utilities/utilities";

export const contactFormRules = {
  fname: (value: string) => validateName(value, "First name"),
  lname: (value: string) => validateName(value, "Last name"),
  email: validateEmail,
  phone: validatePhoneNumber,
  postCode: validatePostCode,
};
