import Image from "next/image";

import deleteIcon from "../../assets/icons/deleteIcon.svg";
import { Present } from "../page";

interface PresentRowProps {
  item: Present;
  onClick: (value: string) => void;
}

export default function PresentRow({ item, onClick }: PresentRowProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16,
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={item.image}
          alt="present image"
          width={24}
          height={24}
          style={{ width: 36, height: 36, borderRadius: 4, marginRight: 16 }}
        />
        <p className="text-black">{item.name}</p>;
        {item.quantity > 1 && (
          <p className="text-black">{`x${item.quantity}`}</p>
        )}
      </div>
      <div onClick={() => onClick(item.name)}>
        <Image
          alt="delete icon"
          src={deleteIcon}
          style={{ width: 20, height: 20 }}
        />
      </div>
    </div>
  );
}
