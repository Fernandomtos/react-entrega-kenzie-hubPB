import { Input } from "../Input";
import { InputSelectTech } from "../InputSelect";
import { StyledSection } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validator";
import { useForm } from "react-hook-form";
import { BtnSubmit } from "../BtnSubmit";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";

export const ModalEditTech = ({ editTech }) => {
  const { setModalEditTech, modalEditTech, updateTech } =
    useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submit = (data) => {
    updateTech(data, editTech.id);
  };

  return (
    <>
      <StyledSection>
        <div className="boxModal">
          <div className="titleTech">
            <h3>Tecnologia Detalhes</h3>
            <button
              className="closeModal"
              onClick={() => setModalEditTech(!modalEditTech)}
            >
              X
            </button>
          </div>
          <form onSubmit={handleSubmit(submit)}>
            <Input
              label="Nome do Projeto"
              id="title"
              type="text"
              readOnlyInput={true}
              defaultValue={editTech.title}
              placeholder={editTech.title}
              register={register}
            />

            <InputSelectTech
              label="Selecionar Status"
              id="status"
              register={register}
              error={errors.status?.message}
            />
            <div className="btnContainer">
              <div className="btnSalvar">
                <BtnSubmit type="submit">Salvar alterações</BtnSubmit>
              </div>
              <div className="btnDelete">
                <BtnSubmit type="button" editTech={editTech}>
                  Excluir
                </BtnSubmit>
              </div>
            </div>
          </form>
        </div>
      </StyledSection>
    </>
  );
};
