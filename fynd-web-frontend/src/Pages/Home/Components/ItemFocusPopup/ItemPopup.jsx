import React from "react";
import FormInputBox from "../../../../Components/Form/FormInputBox";
import Button from "../../../../Components/Button/Button";
import PopupContainer from "../../../../Components/Popup/PopupContainer";
import "./itemPopup.css";

export default function ItemPopup({isPopupOpen, togglePopupOpen}) {
  return (
    <PopupContainer isPopupOpen={isPopupOpen} togglePopup={togglePopupOpen}>
      <div className="object-info-box">
        <img src="https://thumbs.dreamstime.com/b/escape-room-concept-vintage-key-blue-background-copy-space-abstract-text-170716152.jpg" />
        <p className="bordered-status-text">Chaves</p>
        <h2 className="object-name">Molho de chaves prateadas</h2>

        <div className="found-local">
          <div className="local-card">
            <p className="topic-text">ENCONTRADO EM</p>
            <p className="info-value">Estacionamento bloco B</p>
          </div>

          <div className="local-card">
            <p className="topic-text">DATA</p>
            <p className="info-value">04 de novembro de 2026</p>
          </div>
          <p>
            Duas chaves prateadas presas numa argola, encontradas no chão perto
            da vaga 12.
          </p>
          <p className="bordered-status-text">Aguardando dono</p>
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
            id="name-input"
            type="text"
            labelText="Seu nome completo *"
            placeholderText="Ex.: Maria Oliveira"
          />

          <FormInputBox
            id="contact-input"
            type="email"
            labelText="Contato (e-mail ou telefone) *"
            placeholderText="Ex.: maria@email.com"
          />

          <FormInputBox
            id="detail-input"
            type="text"
            labelText="Algum detalhe que só o dono saberia"
            placeholderText="Ex.: uma das chaves é do cadeado da bicicleta"
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
