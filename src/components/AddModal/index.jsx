import { Input } from "../Input";
import { InputSelectTech } from "../InputSelect";
import { StyledSection } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validator";
import { useForm } from "react-hook-form";
import { BtnSubmit } from "../BtnSubmit";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";

export const AddModal = () => {
  const { createTech, setModalRegisterTech, modalRegisterTech } =
    useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <>
      <StyledSection>
        <div className="boxModal">
          <div className="titleTech">
            <h3>Cadastrar Tecnologia</h3>
            <button
              className="closeModal"
              onClick={() => setModalRegisterTech(!modalRegisterTech)}
            >
              X
            </button>
          </div>
          <form onSubmit={handleSubmit(createTech)}>
            <Input
              label="Nome"
              id="title"
              type="text"
              readOnlyInput=""
              placeholder="Digite o nome da Tecnologia"
              register={register}
              error={errors.title?.message}
            />

            <InputSelectTech
              label="Selecionar Status"
              id="status"
              register={register}
              error={errors.status?.message}
            />
            <BtnSubmit type="submit">Cadastrar Tecnologia</BtnSubmit>
          </form>
        </div>
      </StyledSection>
    </>
  );
};
