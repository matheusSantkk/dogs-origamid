import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Feed from "../../Assets/feed.svg?react";
import Estatisticas from "../../Assets/estatisticas.svg?react";
import AdicionarFoto from "../../Assets/adicionar.svg?react";
import Sair from "../../Assets/sair.svg?react";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const [mobile, setMobile] = useState(null);

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <Feed />
        {mobile && "Minhas fotos"}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <Estatisticas />
        {mobile && "Estatisticas"}
      </NavLink>
      <NavLink to="/conta/postar">
        <AdicionarFoto /> {mobile && "Adicionar Foto"}
      </NavLink>
      <button onClick={userLogout}>
        <Sair /> {mobile && "Sair"}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
