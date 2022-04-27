import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { SignInView } from "./SignInView";
import { UserSignInViewModel } from "./types/UserSignIn";

type SignInLogicProps = {
  defaultValues: UserSignInViewModel;
  onSubmit: (data: UserSignInViewModel) => Promise<any>;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email("L'adresse email est invalide")
    .required("L'adresse email est requise."),
  password: yup.string().required("Le mot de passe est requis."),
});

export const SignInLogic = ({ defaultValues, onSubmit }: SignInLogicProps) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const form = useForm<UserSignInViewModel>({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (data: UserSignInViewModel) => {
    setError("");
    onSubmit(data)
      .then((user) => {
        console.log(user);
        toast.success(`
        ${data.email} vient de se connecter`);
        navigate(`/backoffice`);
      })
      .catch((error) => {
        console.log(error);
        if (error instanceof Error) console.log(error.name);
        setError(error.message);
      });
  };

  return (
    <SignInView form={form} onSubmit={handleSubmit} error={error}></SignInView>
  );
};
