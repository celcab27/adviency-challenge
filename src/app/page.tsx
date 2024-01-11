"use client";
import { useEffect, useState } from "react";
import PresentRow from "./PresentRow";

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
  const [newValue, setNewValue] = useState("");
  const [newQuantity, setNewQuantity] = useState(1);
  const [newImage, setNewImage] = useState("");

  const handleClick = (value: string) => {
    setPresents((prevState) => prevState.filter((item) => item.name !== value));
  };

  useEffect(() => {
    localStorage.setItem("presents", JSON.stringify(presents));
  }, [presents]);

  console.log("presents", presents);
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-24 bg-white bg-[url('https://www.itakeyou.co.uk/wp-content/uploads/2022/10/christmas-wallpapers.jpg')] bg-no-repeat"
      style={{ backgroundSize: "100% 100%", backgroundColor: "#FF6955" }}
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 24,
            }}
          >
            <div>
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
                  marginLeft: 8,
                }}
              />
              <input
                type="number"
                onChange={(e) => setNewQuantity(Number(e.target.value))}
                defaultValue={1}
                value={newQuantity}
                style={{
                  width: 50,
                  marginLeft: 8,
                  marginRight: 16,
                  border: "0.5px solid rgb(128, 128, 128)",
                  borderRadius: 4,
                  height: 32,
                  color: "black",
                  paddingLeft: 4,
                }}
              />
            </div>
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
                    setPresents((prevState) => {
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
                    setPresents((prev) => [
                      ...prev,
                      {
                        name: newValue,
                        quantity: newQuantity,
                        image: newImage,
                      },
                    ]);
                  }
                }
              }}
            >
              Agregar
            </button>
          </div>
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

          <button
            onClick={() => setPresents([])}
            style={{
              backgroundColor: "#028A0F",
              padding: "4px 8px",
              borderRadius: 8,
              marginTop: 32,
            }}
          >
            Borrar todo
          </button>
        </div>
      </div>
    </main>
  );
}
