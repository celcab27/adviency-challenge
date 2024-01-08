"use client";
import { useState } from "react";

export default function Home() {
  const [presents, setPresents] = useState([
    "Regalo 1",
    "Regalo 2",
    "Regalo 3",
  ]);
  const [newValue, setNewValue] = useState("");

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-24 bg-white bg-[url('https://www.itakeyou.co.uk/wp-content/uploads/2022/10/christmas-wallpapers.jpg')] bg-no-repeat"
      style={{ backgroundSize: "100% 100%", backgroundColor: "#FF6955" }}
    >
      <div
        className="border-black h-3/4 bg-white rounded-lg shadow-2xl"
        style={{ height: 600, width: 400 }}
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
            <input
              placeholder="Regalo 1..."
              onChange={(e) => setNewValue(e.target.value)}
              style={{
                borderWidth: 0.5,
                borderColor: "#808080",
                borderRadius: 4,
                padding: "4px 8px",
                color: "black",
              }}
            />
            <button
              className="text-wite"
              style={{
                backgroundColor: "#028A0F",
                padding: "4px 8px",
                borderRadius: 8,
              }}
              onClick={() => setPresents((prev) => [...prev, newValue])}
            >
              Agregar
            </button>
          </div>
          {presents.map((item) => (
            <p className="text-black">{item}</p>
          ))}
        </div>
      </div>
    </main>
  );
}
