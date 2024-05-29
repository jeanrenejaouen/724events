import Menu from "../../containers/Menu";
import ServiceCard from "../../components/ServiceCard";
import EventCard from "../../components/EventCard";
import PeopleCard from "../../components/PeopleCard";

import "./style.scss";
import EventList from "../../containers/Events";
import Slider from "../../containers/Slider";
import Logo from "../../components/Logo";
import Icon from "../../components/Icon";
import Form from "../../containers/Form";
import Modal from "../../containers/Modal";
import { useData } from "../../contexts/DataContext";

const Page = () => {
  /* Erreur fonctionnelle : Le dernier événement n'apparaît pas dans le pied de page */
  /* Solution : Initialisez correctement "last" avec le dernier événement dans "data" */
  /* const {last} = useData() */
  /* ce code permet d'obtenir le dernier événement d'une liste d'événements stockée dans l'objet data. */
  const {data} = useData()  

  /* const lastTri = data && data.events.sort((a, b) => 
     new Date(b.date) - new Date(a.date) ? 1 : null ); */  
  
  /* console.log(lastTri) */

  /* const last = lastTri.length -1 */
  
 /*  Ce code signifie que la variable `last` va stocker le dernier élément du tableau `data.events` si ce tableau 
  n'est pas vide. Sinon, la variable `last` sera égale à `null`.
  L'opérateur `&&` est utilisé en premier afin de vérifier si `data` existe et si `data.events` n'est pas nul. 
  Ensuite, la condition `data.events.length > 0` vérifie si le tableau `data.events` contient au moins un élément. 
  Si c'est le cas, l'élément à l'index `data.events.length - 1` (le dernier élément du tableau) est assigné à la variable 
  `last`. Sinon, la variable `last` est assignée à `null`. */ 

const last = data && data.events.length > 0
      ? data.events[data.events.length - 1] 
      : null;            

  return <>
    <header>
      <Menu />
    </header>
    <main>
      <section className="SliderContainer">
        <Slider />
      </section>
      <section className="ServicesContainer">
        {/* Erreur fonctionnelle : le lien "Nos Services" ne dirige pas à la section "Nos Services" */}
        {/* Solution : rajouter l'ancre id="nos-services" */}
        <h2 id="nos-services" className="Title">Nos services</h2>
        <p>Nous organisons des événements sur mesure partout dans le monde</p>
        <div className="ListContainer">
          <ServiceCard imageSrc="/images/priscilla-du-preez-Q7wGvnbuwj0-unsplash1.png">
            <h3>Soirée d’entreprise</h3>
            Une soirée d’entreprise vous permet de réunir vos équipes pour un
            moment convivial afin de valoriser votre société en projetant une
            image dynamique. Nous vous proposons d’organiser pour vous vos
            diners et soirée d’entreprise
          </ServiceCard>
          <ServiceCard imageSrc="/images/hall-expo.png">
            <h3>Conférences</h3>
            724 events vous propose d’organiser votre évènement, quelle que soit
            sa taille, en s’adaptant à votre demande et à vos demandes. En tant
            que spécialistes de l’évènementiel, nous saurons trouver le lieu
            parfait ainsi que des solutions inédites pour capter votre audience
            et faire de cet évènement un succès
          </ServiceCard>
          <ServiceCard imageSrc="/images/sophia-sideri-LFXMtUuAKK8-unsplash1.png">
            <h3>Experience digitale</h3>
            Notre agence experte en contenus immersifs offre des services de
            conseil aux entreprises, pour l’utilisation de la réalité virtuelle,
            de la réalité augmentée et de la réalité mixte de l’animation
            événementielle, à la veille technologique jusqu’au développement de
            module de formation innovant
          </ServiceCard>
        </div>
      </section>
      <section className="EventsContainer">
        {/* Erreur fonctionnelle : le lien "Nos Services" ne dirige pas à la section "Nos Réalisations" */}
        {/* Solution : rajouter l'ancre id="nos-realisations" */}
        <h2 id="nos-realisations" className="Title">Nos réalisations</h2>
        <EventList />
      </section>
      <section className="PeoplesContainer">
        {/* Erreur fonctionnelle : le lien "Nos Services" ne dirige pas à la section "Notre équipe" */}
        {/* Solution : rajouter l'ancre id="notre-equipe" */}
        <h2 id="notre-equipe" className="Title">Notre équipe</h2>
        <p>Une équipe d’experts dédiés à l’ogranisation de vos événements</p>
        <div className="ListContainer">
          <PeopleCard
            imageSrc="/images/stephanie-liverani-Zz5LQe-VSMY-unsplash.png"
            name="Samira"
            position="CEO"
          />
          <PeopleCard
            imageSrc="/images/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.png"
            name="Jean-baptiste"
            position="Directeur marketing"
          />
          <PeopleCard
            imageSrc="/images/christina-wocintechchat-com-SJvDxw0azqw-unsplash.png"
            name="Alice"
            position="CXO"
          />
          <PeopleCard
            imageSrc="/images/jonas-kakaroto-KIPqvvTOC1s-unsplash.png"
            name="Luís"
            position="Animateur"
          />
          <PeopleCard
            imageSrc="/images/amy-hirschi-b3AYk8HKCl0-unsplash1.png"
            name="Christine"
            position="VP animation"
          />
          <PeopleCard
            imageSrc="/images/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.png"
            name="Isabelle"
            position="VP communication"
          />
        </div>
      </section>
      <div className="FormContainer" id="contact">
        <h2 className="Title">Contact</h2>
        <Modal
          Content={
            <div className="ModalMessage--success">
              <div>Message envoyé !</div>
              <p>
                Merci pour votre message nous tâcherons de vous répondre dans
                les plus brefs délais
              </p>
            </div>
          }
        >
          {({ setIsOpened }) => (
            <Form
              onSuccess={() => setIsOpened(true)}
              onError={() => null}
            />
          )}
        </Modal>
      </div>
    </main>
    <footer className="row">
      <div className="col presta">
        <h3>Notre derniére prestation</h3>
        {/* Erreur console : The prop `imageSrc` is marked as required in `EventCard`, but its value is `undefined`. */}
        {/* Erreur console : The prop `title` is marked as required in `EventCard`, but its value is `undefined`. */}
        {/* Erreur console (après ajout 'imageAlt'): The prop `imageAlt` is marked as required in `EventCard`, but its value is `undefined`. */}
        {/* Voir propTypes EventCard */}
        {/* Solution : Ajouter test du dernier évènement récupéré  */}
        {/* ce code affiche un composant "EventCard" avec les informations de l'objet "last" si cet objet est défini. */}
        {last && (
          
        <EventCard
        
          imageSrc={last?.cover}
          // Ajouter "imageAlt"
          imageAlt={last?.description}
          title={last?.title}
          date={new Date(last?.date)}
          /* date={last?.date} */           
          small
          /* Modifier la valeur du label */
          /* label="boom" */
          label={last?.type}
          
        />
        )}
        
        
         
      </div>
      <div className="col contact">
        <h3>Contactez-nous</h3>
        <address>45 avenue de la République, 75000 Paris</address>
        <div>01 23 45 67 89</div>
        <div>contact@724events.com</div>
        <div>
          <a href="#twitch">
            <Icon name="twitch" />
          </a>
          <a href="#facebook">
            <Icon name="facebook" />
          </a>
          <a href="#twitter">
            <Icon name="twitter" />
          </a>
          <a href="#youtube">
            <Icon name="youtube" />
          </a>
        </div>
      </div>
      <div className="col description">
        <Logo size="large" />
        <p>
          Une agence événementielle propose des prestations de service
          spécialisées dans la conception et l&apos;organisation de divers événements
          tels que des événements festifs, des manifestations sportives et
          culturelles, des événements professionnels
        </p>
      </div>
    </footer>
  </>
}

export default Page;
