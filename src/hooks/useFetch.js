import { useEffect, useState } from "react";
import { db } from "../firebaseInit";
import { toast } from "react-hot-toast";
import { collection, onSnapshot, addDoc } from "firebase/firestore";

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [showAlbumForm, setShowAlbumForm] = useState(false);
  const [openAlbum, setOpenAlbum] = useState({ albumId: "", open: false });

  const toggleAlbumForm = () => {
    setShowAlbumForm(!showAlbumForm);
  };

  const onAlbumFormSubmit = async (data) => {
    // console.log(data);
    await addDoc(collection(db, "albums"), {
      name: data,
      images: [],
      createdOn: new Date(),
    });
    toast.success("Album Created Successfully");
  };

  const settingAlbum = (id) => {
    // console.log(id);
    setOpenAlbum({
      albumId: id,
      open: true,
    });
  };

  const goBackHome = () => {
    setOpenAlbum({ albumId: "", open: false });
  };

  useEffect(() => {
    setLoading(true);
    try {
      // Getting Real-Time Update. OnSnapshot is acting like a listener
      onSnapshot(collection(db, "albums"), (snapShot) => {
        const albums = snapShot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        // console.log(albums);
        setAlbums(albums);
      });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    albums,
    showAlbumForm,
    openAlbum,
    toggleAlbumForm,
    onAlbumFormSubmit,
    settingAlbum,
    goBackHome,
  };
};
// export the useFetch hook as a default export

export default useFetch;
