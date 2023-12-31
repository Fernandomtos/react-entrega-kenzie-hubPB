import { StyledDiv } from "./style";
import { Input } from "../Input";
import { InputSelect } from "../InputSelect";
import { BtnSubmit } from "../BtnSubmit";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { schema } from "./validator";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const FormRegister = () => {
  const { createUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <StyledDiv>
        <h2>Cria sua conta</h2>
        <p>Rapido e grátis, vamos nessa</p>
        <form onSubmit={handleSubmit(createUser)}>
          <Input
            label="Nome"
            id="name"
            type="text"
            placeholder="Digite seu nome"
            register={register}
            error={errors.name?.message}
          />

          <Input
            label="Email"
            id="email"
            type="text"
            placeholder="Digite seu email"
            register={register}
            error={errors.email?.message}
          />

          <Input
            label="Senha"
            id="password"
            type="password"
            placeholder="Digite sua senha"
            register={register}
            error={errors.password?.message}
          />

          <Input
            label="Confirmar Senha"
            id="confirmPassword"
            type="password"
            placeholder="Confirme sua senha"
            register={register}
            error={errors.confirmPassword?.message}
          />

          <Input
            label="Bio"
            id="bio"
            type="text"
            placeholder="Fale sobre você"
            register={register}
            error={errors.bio?.message}
          />

          <Input
            label="Contato"
            id="contact"
            type="text"
            placeholder="Opição de contato"
            register={register}
            error={errors.contact?.message}
          />

          <InputSelect
            label="Selecionar Módulo"
            id="course_module"
            register={register}
            error={errors.course_module?.message}
          />

          <BtnSubmit type="submit">Cadastrar</BtnSubmit>
        </form>
      </StyledDiv>
    </>
  );
};
