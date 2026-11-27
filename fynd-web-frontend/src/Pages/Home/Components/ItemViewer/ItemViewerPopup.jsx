import React from "react";
import FormInputBox from "../../../../Components/Form/FormInputBox";
import Button from "../../../../Components/Button/Button";
import PopupContainer from "../../../../Components/Popup/PopupContainer";
import "./itemPopup.css";

export default function ItemViewerPopup({ isPopupOpen, togglePopupOpen, item}) {
  console.log("item: " + item)
  return (
    <PopupContainer isPopupOpen={isPopupOpen} togglePopup={togglePopupOpen}>
      <div className="object-info-box">
        <img src={item.imagemUrl} />
        <p className="bordered-status-text">{item.categoria}</p>
        <h2 className="object-name">{item.nome}</h2>

        <div className="found-local">
          <div className="local-card">
            <p className="topic-text">ENCONTRADO EM</p>
            <p className="info-value">{item.encontradoEm}</p>
          </div>

          <div className="local-card">
            <p className="topic-text">DATA</p>
            <p className="info-value">{item.nome}</p>
          </div>
          <p>{item.nome}</p>
          <p className="bordered-status-text">{item.status}</p>
        </div>
      </div>
      <form action="#">
        <div className="owner-form">
          <div className="form-top">
            <p>Você é o dono?</p>
            <h2>Solicitar como possível dono</h2>
            <p>
              Preencha seus dados. A secretaria confere e entra em contato para
              combinar a retirada.
            </p>
          </div>

          <FormInputBox
            labelText="Seu nome completo *"
            inputId="name-input"
            type="text"
            placeholder="Ex.: Maria Oliveira"
          />

          <FormInputBox
            labelText="Contato (e-mail ou telefone) *"
            inputId="contact-input"
            type="email"
            placeholder="Ex.: maria@email.com"
          />

          <FormInputBox
            labelText="Algum detalhe que só o dono saberia"
            inputId="detail-input"
            type="text"
            placeholder="Ex.: uma das chaves é do cadeado da bicicleta"
          />

          <div className="buttons-container">
            <Button
              text="Cancelar"
              subclass="black"
              onClick={togglePopupOpen}
            />
            <Button text="Enviar solicitação" />
          </div>
        </div>
      </form>
    </PopupContainer>
  );
}
