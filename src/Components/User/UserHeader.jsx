import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
  const [title, setTitle] = useState("");
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const { pathname } = location;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTitle(
      pathname === "/conta/postar"
        ? "Poste Sua Foto"
        : pathname === "/conta/estatisticas"
          ? "Estatísticas"
          : "Minha Conta",
    );
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
