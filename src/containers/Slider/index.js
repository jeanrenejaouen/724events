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
    /* Erreur console : Cannot read properties of undefined (reading 'length')
    at index.js:22:1 */
    /* Solution : Ajouter si "byDateDesc" existe */
    if (byDateDesc) {
    setTimeout(
      /* Erreur fonctionnelle : une image vide est affichée dans le slider */
      /* Solution : soustraire 1 à la longueur du tableau car le premier élément d'un tableau = 0 */      

      () => setIndex(index < byDateDesc.length -1 ? index + 1 : 0), 
      /* Erreur console : [Violation] 'setTimeout' handler took 54ms */
      /* Solution : Modifier la vitesse de défilement 2000 au lieu de 5000  */    
      2000
    );  
  };
};
  useEffect(() => {
    nextCard();
  });
  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        /* Erreur console : Each child in a list should have a unique "key" prop, Check the render method of `Slider` */
        /* Solution : Rajouter une div pour "className={`SlideCard SlideCard--${index === idx ? "display" : "hide"}'} */
        /* Puis */
        /* Erreur terminal : Fragments should contain more than one child - otherwise, there‘s no need for a Fragment at all 
        react/jsx-no-useless-fragment */
        /* Solution : Supprimer <> </> */
        /* <> */
          <div
            key={event.title}>
            <div className={`SlideCard SlideCard--${
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

                  /* Erreur console : Encountered two children with the same key, `undefined`. */
                  /* Solution : modifier le nom de la clef */
                  /* key={`${event.id}`} car déjà utilisée dans Events Ligne 52 */
                  key={`${_.title}`}                                   
                  type="radio"
                  name="radio-button"
                  /* Erreur fonctionnelle : le bouton radio du slider reste bloqué sur le 3ème bouton */
                  /* Solution : remplacer idx par index qui est le slide courant */
                  /* checked={idx === radioIdx} */
                  checked={index === radioIdx} 
                  /* Erreur console : You provided a `checked` prop to a form field without an `onChange` handler. 
                  This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, 
                  set either `onChange` or `readOnly`. */
                  /* Solution : Rajouter "readOnly" car les boutons sont en lecture seule */
                  readOnly                
                />
              ))}
            </div>
          </div>
          </div>
         /* </> */
      ))}
    </div>
  );
};

export default Slider;
