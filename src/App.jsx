import { useState } from "react";
import { ClipLoader } from "react-spinners";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMore from "./components/LoadMore/LoadMore";
import { getPhotos } from "./api";
import './App.css';

function App() {
  
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); 
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);

  const handleSearch = async (query) => {
    setSearch(query);
    try {
      const data = await getPhotos(query, 1);
      setImages(data); 
      setLoader(true);
      setError(false);
    } catch (err) {
      console.error(err);
      setError(true);
    }finally {
      setLoader(false)
    }
  };

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  const handLeMore = async () => {
    setLoader(true);
    try {
      const data = await getPhotos(search, page + 1);
      setImages((prevImages) =>
      [...prevImages, ...data]
      )
      setPage(page + 1);
    }catch(err){
      console.log(err)
    }finally{
      setLoader(false);
    }
  }
  return (
    <div>
      <SearchBar setSearch={handleSearch} />
      
      <ImageGallery images={images} openModal={openModal} errorMessage={error}/>
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          isOpen={!!selectedImage}
          onRequestClose={closeModal}
        />
      )}
      <div className="loader">
        <ClipLoader color="#36d7b7" size={150} loading={loader} />
        {!loader && images.length > 0 && (
            <LoadMore handLeMore={handLeMore}/>
          )}
      </div>
      
    </div>
  );
}

export default App;