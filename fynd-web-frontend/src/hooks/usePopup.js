import { useState } from "react";

export default function usePopup() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopupOpen = () => {
    setPopupOpen(!isPopupOpen);
  };

  return { isPopupOpen, togglePopupOpen };
}
