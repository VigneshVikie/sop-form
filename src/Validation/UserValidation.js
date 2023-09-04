import * as yup from "yup";

export const userSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("This is a required question"),
  fullName: yup.string().required("This is a required question"),
  age: yup
    .number()
    .positive("Age must be a positive number")
    .integer("Age must be an integer")
    .required("This is a required question"),
  highestEducation: yup.string().required("This is a required question"),
  institution: yup.string().required("This is a required question"),
  studiedEdu: yup.string().required("This is a required question"),
  relevantExp: yup.string().required("This is a required question"),
  canadaInstitute: yup.string().required("This is a required question"),
  canadaDegree: yup.string().required("This is a required question"),
  applyingCountry: yup.string().required("This is a required question"),
  futureGoals: yup.string().required("This is a required question"),
  englishListening: yup
    .number()
    .positive("Must be a positive number")
    .required("This is a required question"),
  englishReading: yup
    .number()
    .positive("Must be a positive number")
    .required("This is a required question"),
  englishSpeaking: yup
    .number()
    .positive("Must be a positive number")
    .required("This is a required question"),
  englishWriting: yup
    .number()
    .positive("Must be a positive number")
    .required("This is a required question"),
  paidTutionFee: yup.string().required("This is a required question"),
  tutionFee: yup
    .number()
    .positive("Must be a positive number")
    .required("This is a required question"),
  gic: yup.string().required("This is a required question"),
  paidGIC: yup
    .number()
    .positive("Must be a positive number")
    .required("This is a required question"),
});
