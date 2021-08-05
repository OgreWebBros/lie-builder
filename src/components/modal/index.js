import React, { useEffect } from "react";
import Button from "../button";
import { createPortal } from "react-dom";
const Portal = ({ children }) => {
    const modalRoot = document.getElementById("modal");
    const el = document.createElement("div");

    useEffect(() => {
        modalRoot.appendChild(el);
    });
    useEffect(() => {
        return () => modalRoot.removeChild(el);
    });
    return createPortal(children, el);
};
const bemDetails = {
    block: "modal",
}
const Modal = ({ children, toggle, open }) => {
    return(
    <Portal>
        {open && (
            <div className="modal__wrapper">
                <div className="modal__card">
                <Button   {...bemDetails} text="&#10006;" modifier={["small", "close"]} action={()=>{toggle()}}/>
                    {children}
                </div>
                <div className="modal__background" onClick={toggle} />
            </div>
        )}
    </Portal>
)
};
export default Modal; 