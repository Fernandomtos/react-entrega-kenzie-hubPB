import { useContext, useState } from "react";
import { TechContext } from "../../providers/TechContext";
import { UserContext } from "../../providers/UserContext";
import { AddModal } from "../AddModal";
import { ModalEditTech } from "../ModalEditTech";
import { StyledMain } from "./style";

export const RenderDash = () => {
  const [editTech, setEditTech] = useState([]);
  const { techs, loading } = useContext(UserContext);
  const {
    setModalRegisterTech,
    modalRegisterTech,
    setModalEditTech,
    modalEditTech,
  } = useContext(TechContext);

  const openModalEditTech = (tech) => {
    setModalEditTech(!modalEditTech);
    setEditTech(tech);
  };

  return (
    <>
      <StyledMain>
        {loading ? (
          <div className="imgLoading">
            <img src="/img/Spinner-1s-200px.svg" alt="Loading..." />
          </div>
        ) : (
          <>
            <div className="boxMenuUl">
              <h2>Tecnologias</h2>
              <button
                className="btnAddTech"
                type="button"
                onClick={() => setModalRegisterTech(!modalRegisterTech)}
              >
                +
              </button>
              {modalRegisterTech && <AddModal />}
              {modalEditTech && <ModalEditTech editTech={editTech} />}
            </div>
            <div className="containerUl">
              <ul>
                {techs &&
                  techs.map((tech) => {
                    return (
                      <li key={tech.id}>
                        <button
                          className="btnEditTech"
                          type="button"
                          onClick={() => openModalEditTech(tech)}
                        >
                          <p>{tech.title}</p>
                          <span>{tech.status}</span>
                        </button>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </>
        )}
      </StyledMain>
    </>
  );
};
