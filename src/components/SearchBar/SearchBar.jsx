import { useRef } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { FaSearch } from 'react-icons/fa'; 

import css from './SearchBar.module.css';

const SearchBar = ({ setSearch }) => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    let query = inputRef.current.value;
    if (query.trim() === '') {
      toast.error('Boş Bırakılamaz!', { duration: 2000 });
      return;
    } else {
      setSearch(query);
    }
  }

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button 
          type="submit" 
          className={css.formButton}
        >
          <FaSearch size={20} /> 
        </button>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          ref={inputRef}
          className={css.formInput}
        />
      </form>
      <Toaster position="top-right" />
    </header>
  )
}

export default SearchBar;