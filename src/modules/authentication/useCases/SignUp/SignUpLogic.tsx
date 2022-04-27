import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { SignUpView } from "./SignUpView";
import { UserSignUpViewModel } from "./types/UserSignUp";

type SignUpLogicProps = {
  defaultValues: UserSignUpViewModel;
  onSubmit: (data: UserSignUpViewModel) => Promise<any>;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email("L'adresse email est invalide")
    .required("L'adresse email est requise."),
  password: yup.string().required("Le mot de passe est requis."),
});

export const SignUpLogic = ({ defaultValues, onSubmit }: SignUpLogicProps) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const form = useForm<UserSignUpViewModel>({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (data: UserSignUpViewModel) => {
    setError("");
    onSubmit(data)
      .then((user) => {
        console.log(user);
        /* toast.success(`
        ${data.email} vient de se connecter`);
  */ //navigate(`/backoffice`);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <SignUpView form={form} onSubmit={handleSubmit} error={error}></SignUpView>
  );
};
