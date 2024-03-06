// Importing using ES6 module type
import { useEffect, useState } from "react";
import { db } from "../firebaseInit";
import { toast } from "react-hot-toast";
import { collection, onSnapshot, addDoc } from "firebase/firestore";

// Creating useFetch hook function
const useFetch = () => {
  // Defining State
  const [loading, setLoading] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [showAlbumForm, setShowAlbumForm] = useState(false);
  const [openAlbum, setOpenAlbum] = useState({ albumId: "", open: false });

  // Performing Side Effect for getting the real time updates from Cloud Firestore
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
        setAlbums(albums);
      });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  // Function to toggle weather form should be shown or not
  const toggleAlbumForm = () => {
    setShowAlbumForm(!showAlbumForm);
  };

  // Function for adding new album data to the cloud Firestore on form submission
  const onAlbumFormSubmit = async (data) => {
    // console.log(data);
    await addDoc(collection(db, "albums"), {
      name: data,
      images: [],
      createdOn: new Date(),
    });
    toast.success("Album Created Successfully");
  };

  // Function : Whenever a album is click setting the album open to be true and setting the id
  const settingAlbum = (id) => {
    // console.log(id);
    setOpenAlbum({
      albumId: id,
      open: true,
    });
  };

  // Function : On clicking on back button setting the albumId to empty and open to false.
  const goBackHome = () => {
    setOpenAlbum({ albumId: "", open: false });
  };

  // Returning the necessary state and function for further use
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
