import React from "react";

import FormInputBox from "../../Components/Form/FormInputBox";
import Button from "../../Components/Button/Button";

export default function ItemPopup() {
  return (
    <PopupContainer isPopupOpen={isPopupOpen}>
      <div className="object-info">
        <img src="https://thumbs.dreamstime.com/b/escape-room-concept-vintage-key-blue-background-copy-space-abstract-text-170716152.jpg" />
        <p>Categoria: Chaves</p>

        <div className="found-local">
          <div className="local-card">
            <p>ENCONTRADO EM</p>
            <p>Estacionamento bloco B</p>
          </div>

          <div className="local-card">
            <p>DATA</p>
            <p>04 de novembro de 2026</p>
          </div>
          <p>
            Duas chaves prateadas presas numa argola, encontradas no chão perto
            da vaga 12.
          </p>
          <p>Aguardando dono</p>
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
