import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", async () => {    
    // la fonction render prend un composant React comme paramètre
    // et il le restituera pour que nous puissions le tester.
    render(<Home />);    
    // screen est un objet fourni avec de nombreuses requêtes que nous pouvons utiliser pour tester directement l'interface utilisateur,
    // ignore les détails d'implémentation et se concentre sur ce que l'utilisateur verra réellement.

    // Les requêtes findByText renvoient une promesse qui se résout lorsqu'un texte correspondant est trouvé.
    // La promesse est rejetée si aucune correspondance de texte ou si plusieurs correspondances sont trouvées
    // après un délai d'attente par défaut de 1000 ms.
    // findByText attend que le texte apparaisse dans le DOM en raison de sa nature asynchrone.
    await screen.findByText("Catégories");
  })

  it("a list a people is displayed", async () => {
    render(<Home />);
    await screen.findByText("Une équipe d’experts dédiés à l’ogranisation de vos évènements");
  })

  it("a footer is displayed", async () => {
    render(<Home />);
    await screen.findByText("Contactez-nous");
  })

  it("an event card, with the last event, is displayed", async () => {
    render(<Home />);
    await screen.findByText("Notre dernière prestation");    
  })

});

// obtenir le contenu textuel d'un élément :
// 1) findBy
// Les requêtes findBy renvoient une promesse qui se résout lorsqu'un élément correspondant est trouvé.
// La promesse est rejetée si aucun élément ne correspond ou si plusieurs correspondances sont trouvées
// après un délai d'attente par défaut de 1000 ms.
// findByText attend que l'élément apparaisse dans le DOM en raison de sa nature asynchrone
// Si vous devez rechercher plusieurs éléments, utilisez findAllBy.

// 2) getBy
// Les requêtes getBy renvoient le premier nœud correspondant à une requête,
// et renvoie une erreur si aucun élément ne correspond ou si plusieurs correspondances sont trouvées.
// Si vous devez trouver plusieurs éléments, utilisez getAllBy.

// 3) queryBy
// Les requêtes queryBy renvoient le premier nœud correspondant à une requête,
// et renvoie null si aucun élément ne correspond.
// Ceci est utile pour affirmer un élément qui n'est pas présent.
// Ceci est rejeté si plusieurs correspondances sont trouvées (utilisez plutôt queryAllBy).