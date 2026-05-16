import FeedPhotoItem from "./FeedPhotoItem";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import { useEffect } from "react";
import { PHOTOS_GET } from "../../api";
import Loading from "../Helper/Loading";
import styles from "./FeedPhoto.module.css";

const FeedPhotos = ({ page, user, setModalPhoto, setInfinity }) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhoto() {
      const total = 3;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) {
        setInfinity(false);
      }
    }
    fetchPhoto();
  }, [request, user, page, setInfinity]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotoItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
