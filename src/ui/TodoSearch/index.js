import React from 'react';
import './TodoSearch.css';
import { useNavigate, useParams } from "react-router-dom";
function TodoSearch({ searchValue, setSearchValue, loading }) {
  const navigate = useNavigate();
  const params = useParams();
  
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
    navigate('/' + event.target.value);
  };
  React.useEffect(() => {
    if(params.searchValue){
      setSearchValue(params.searchValue)
    }
  })
  return (
    <input
      className="TodoSearch"
      placeholder="Ingresa tu ToDo"
      value={params.searchValue || searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
}

export { TodoSearch };
