"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { Present } from "../page";

function PresentFormModal({
  isOpen,
  presents,
  setPresents,
  onClose,
}: {
  isOpen: boolean;
  presents: Present[];
  setPresents: (presents: any) => void;
  onClose: () => void;
}) {
  const [newValue, setNewValue] = useState("");
  const [newQuantity, setNewQuantity] = useState(1);
  const [newImage, setNewImage] = useState("");

  return isOpen ? (
    createPortal(
      <div
        style={{
          backgroundColor: "white",
          borderRadius: 8,
          padding: 24,
          zIndex: 100,
          display: isOpen ? "block" : "none",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: "10px 10px 5px -7px rgba(122,111,122,0.71)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <input
            placeholder="Regalo 1..."
            onChange={(e) => setNewValue(e.target.value)}
            style={{
              borderWidth: 0.5,
              borderColor: "#808080",
              borderRadius: 4,
              padding: "4px 8px",
              color: "black",
              width: 200,
              marginBottom: 8,
            }}
          />
          <input
            placeholder="http://image..."
            onChange={(e) => setNewImage(e.target.value)}
            style={{
              borderWidth: 0.5,
              borderColor: "#808080",
              borderRadius: 4,
              padding: "4px 8px",
              color: "black",
              width: 200,
              marginBottom: 8,
            }}
          />
          <input
            type="number"
            onChange={(e) => setNewQuantity(Number(e.target.value))}
            defaultValue={1}
            value={newQuantity}
            style={{
              width: 50,
              border: "0.5px solid rgb(128, 128, 128)",
              borderRadius: 4,
              height: 32,
              color: "black",
              marginBottom: 16,
            }}
          />
          <button
            className="text-wite"
            style={{
              backgroundColor: "#028A0F",
              padding: "4px 8px",
              borderRadius: 8,
            }}
            onClick={() => {
              if (newValue) {
                if (presents.some((item) => item.name === newValue)) {
                  setPresents((prevState: Present[]): Present[] => {
                    // Crear un nuevo array con las actualizaciones
                    return prevState.map((item) =>
                      item.name === newValue
                        ? {
                            ...item,
                            quantity: item.quantity + newQuantity,
                            image: newImage,
                          }
                        : item
                    );
                  });
                } else {
                  setPresents((prev: any) => [
                    ...prev,
                    {
                      name: newValue,
                      quantity: newQuantity,
                      image: newImage,
                    },
                  ]);
                }
              }
              onClose();
            }}
          >
            Agregar
          </button>
        </div>
      </div>,
      document.getElementById("modal-root")!
    )
  ) : (
    <></>
  );
}

export default PresentFormModal;
