import { PHOTO_DELETE } from "../../api";
import useFetch from "../../Hooks/useFetch";
import style from "./PhotoDelete.module.css";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();
  async function handleClick() {
    const confirm = window.confirm("Tem certeza que deseja deletar?");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }
  return (
    <>
      {loading ? (
        <button disabled className={style.delete}>
          Deletar
        </button>
      ) : (
        <button onClick={handleClick} className={style.delete}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
