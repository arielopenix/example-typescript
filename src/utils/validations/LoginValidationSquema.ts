import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required("Debe ingresar un Email").email("Formato de Email incorrecto"),
  password: yup.string().required("Debe ingresar una contrasena").min(8,"La contrasena debe tener almenos 8 caracteres").max(10,"La contrasena debe tener maximo 10 caracteres"),
});

