import css from './ImageGallery.module.css'
const ImageGallery = ({ images = [], openModal , errorMessage }) => {
  return (
    <div>
      {errorMessage && <ErrorMessage message="Bir hata oluştu, lütfen tekrar deneyin!" />}
      <ul className={css.ListItem}>
        {images.map((image) => (
          <li key={image.id}  className={css.ListItemList}>
            <img
              src={image.urls.thumb}
              alt={image.alt_description || ""}
              onClick={() => openModal(image)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;