import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCharacters } from "../redux/actions";

const CardsFunc = (props) => {
  const characters = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <div>
      <h1>Cards Funcional</h1>
      <div>
        {characters.map((char) => {
          return <Card id={char.id} name={char.name} key={char.id} />;
        })}
      </div>
    </div>
  );
};

export default CardsFunc;
