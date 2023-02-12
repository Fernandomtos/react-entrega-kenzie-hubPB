import { useState } from "react";
import { BtnSubmit } from "../BtnSubmit";
import { BtnSignup } from "../BtnSingup";
import { StyledDiv } from "./style";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validator";
import { Input } from "../Input";

export const FormLogin = ({ setUser, setLoading }) => {
  const [typePassword, setTypePassword] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const viewPassword = () => {
    setTypePassword(!typePassword);
  };

  const loginUser = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("/sessions", data);
      setUser(response);
      window.localStorage.clear();
      window.localStorage.setItem("@Token", response.data.token);
      window.localStorage.setItem("@UserId", response.data.user.id);
      toast.success("Login realizado com sucesso!");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error(
        "Login inválido, favor verificar dados cadastrados e tentar novamente!"
      );
    } finally {
      setLoading(false);
    }
  };

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

        <BtnSubmit>Entrar</BtnSubmit>
        <span>Ainda não possui uma conta?</span>
        <BtnSignup />
      </form>
    </StyledDiv>
  );
};
