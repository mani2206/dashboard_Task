
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../features/userSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search here..."
      onChange={handleSearch}
      className="search-bar"
    />
  );
};

export default SearchBar;
