import {useState, useEffect} from 'react';

import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

import './ItemList.css';

export default function ItemList({onItemSelected}) {
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const swapiService = new SwapiService();

    swapiService.getAllPeople()
      .then((itemList) => {
        setItemList(itemList);
        setLoading(false);
      })
      .catch((err) => {
        onError(err);
      });
  }, []);

  function onError() {
    setError(true);
    setLoading(false);
  } 

  function renderItems(arr) {
    return arr.map(({id, name}) => {
      return (
        <li className="list-group-item" 
            key={id} 
            onClick={() => onItemSelected(id)}
            >
          {name}
        </li>
      );
    });
  }

  if (!itemList) {
    return <Spinner />
  }

  const hasData = !(loading || error);

  return (
    <ul className="item-list list-group">
      {loading ? <Spinner /> : hasData ? renderItems(itemList) : <ErrorIndicator />}
    </ul>
  );
}