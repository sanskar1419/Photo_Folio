import { useEffect, useState } from "react";
import { db } from "../firebaseInit";
import { collection, onSnapshot } from "firebase/firestore";

// Complete the following hook
const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [showAlbumForm, setShowAlbumForm] = useState(false);
  const [openAlbum, setOpenAlbum] = useState({ albumId: "", open: false });

  useEffect(() => {
    setLoading(true);
    try {
      // Getting Real-Time Update. OnSnapshot is acting like a listener
      const unSub = onSnapshot(collection(db, "albums"), (snapShot) => {
        const albums = snapShot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        console.log(albums);
        setAlbums(albums);
      });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, albums, showAlbumForm, openAlbum };
};
// export the useFetch hook as a default export

export default useFetch;
