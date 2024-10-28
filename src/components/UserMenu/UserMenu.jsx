import { HiUser } from "react-icons/hi";

export const UserMenu = ({ name }) => {
  return (
    <>
      <span><HiUser className="my-icon" size="24" /> {name}</span>
    </>
  );
};
