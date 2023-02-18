import { BtnSubmit } from "../BtnSubmit";
import { BtnSignup } from "../BtnSingup";
import { StyledDiv } from "./style";
import { Input } from "../Input";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { useForm } from "react-hook-form";
import { schema } from "./validator";
import { yupResolver } from "@hookform/resolvers/yup";

export const FormLogin = () => {
  const { loginUser, viewPassword, typePassword } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <StyledDiv>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(loginUser)}>
        <Input
          label="Email"
          id="email"
          type="text"
          placeholder="Digite seu e-mail..."
          register={register}
          error={errors.email?.message}
        />

        <div className="inputPassword">
          <Input
            label="Senha"
            id="password"
            type={typePassword === true ? "password" : "text"}
            placeholder="Digite sua senha..."
            register={register}
            error={errors.password?.message}
          />

          <button type="button" onClick={() => viewPassword()}>
            <img src="./img/icone.svg" alt="icone da senha" />
          </button>
        </div>

        <BtnSubmit type="submit">Entrar</BtnSubmit>
        <span>Ainda não possui uma conta?</span>
        <BtnSignup />
      </form>
    </StyledDiv>
  );
};
