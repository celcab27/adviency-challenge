import Image from "next/image";

import deleteIcon from "../../assets/icons/deleteIcon.svg";

interface PresentRowProps {
  item: string;
  onClick: (value: string) => void;
}

export default function PresentRow({ item, onClick }: PresentRowProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <p className="text-black">{item}</p>;
      <div onClick={() => onClick(item)}>
        <Image
          alt="delete icon"
          src={deleteIcon}
          style={{ width: 20, height: 20 }}
        />
      </div>
    </div>
  );
}
