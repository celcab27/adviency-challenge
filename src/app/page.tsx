"use client";
import { useEffect, useState } from "react";
import PresentRow from "./PresentRow";
import PresentFormModal from "./PresentFormModal";

export interface Present {
  name: string;
  quantity: number;
  image: string;
}

export default function Home() {
  const defaultPresents = localStorage.getItem("presents");
  const [presents, setPresents] = useState<Present[]>(
    defaultPresents?.length ? JSON.parse(defaultPresents) : []
  );
  const [showModal, setShowModal] = useState(false);

  const handleClick = (value: string) => {
    setPresents((prevState) => prevState.filter((item) => item.name !== value));
  };

  useEffect(() => {
    localStorage.setItem("presents", JSON.stringify(presents));
  }, [presents]);

  return (
    <div>
      <PresentFormModal
        isOpen={showModal}
        setPresents={setPresents}
        presents={presents}
        onClose={() => setShowModal(false)}
      />
      <div
        className="flex min-h-screen flex-col items-center justify-center p-24 bg-white bg-[url('https://www.itakeyou.co.uk/wp-content/uploads/2022/10/christmas-wallpapers.jpg')] bg-no-repeat"
        style={{
          backgroundSize: "100% 100%",
          backgroundColor: "#FF6955",
          opacity: showModal ? 0.5 : 1,
        }}
      >
        <div
          className="border-black h-3/4 bg-white rounded-lg shadow-2xl"
          style={{ height: 600, width: 700 }}
        >
          <div>
            <p
              className="text-white text-3xl pb-2 px-8 py-4 rounded-t-lg"
              style={{ backgroundColor: "#C21807" }}
            >
              REGALOS:
            </p>
          </div>
          <div className="px-8 py-4">
            {presents.length ? (
              presents.map((item) => (
                <PresentRow onClick={handleClick} item={item} />
              ))
            ) : (
              <div>
                <p style={{ color: "black" }}>
                  No hay regalos agregados a la lista.
                </p>
              </div>
            )}
            <div style={{ display: "flex", marginTop: 32 }}>
              <button
                style={{
                  borderRadius: 8,
                  backgroundColor: "#028A0F",
                  padding: "4px 8px",
                  marginRight: 8,
                  color: "white",
                }}
                onClick={() => setShowModal(true)}
              >
                Agregar regalo
              </button>

              <button
                onClick={() => setPresents([])}
                style={{
                  border: "1px solid #028A0F",
                  backgroundColor: "white",
                  color: "#028A0F",
                  padding: "4px 8px",
                  borderRadius: 8,
                }}
              >
                Borrar todo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
