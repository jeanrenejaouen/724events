import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    /* Erreur fonctionnelle : Les slides n'apparaissent pas dans un ordre décroissant */
    /* Solution : inverser l'ordre de tri */
    /* new Date(evtA.date) < new Date(evtB.date) ? -1 : 1 */
    new Date(evtB.date) > new Date(evtA.date) ? 1 : -1
  );
  const nextCard = () => {
    
    setTimeout(
      /* Erreur fonctionnelle : une image vide est affichée dans le slider */
      /* Solution : soustraire 1 à la longueur du tableau car le premier élément d'un tableau = 0 */
      () => setIndex(index < byDateDesc.length -1 ? index + 1 : 0),
      5000
    );
  
  };
  useEffect(() => {
    nextCard();
  });
  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <>
          <div
            key={event.title}
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
            <img src={event.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc.map((_, radioIdx) => (
                <input
                  key={`${event.id}`}                                   
                  type="radio"
                  name="radio-button"
                  /* Erreur fonctionnelle : le bouton radio du slider reste bloqué sur le 3ème bouton */
                  /* Solution : remplacer idx par index qui est le slide courant */
                  /* checked={idx === radioIdx} */
                  checked={index === radioIdx}                 
                />
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Slider;
