export const MONTHS = {
  1: "janvier",
  2: "février",
  3: "mars",
  4: "avril",
  5: "mai",
  6: "juin",
  7: "juillet",
  8: "août",
  9: "septembre",
  10: "octobre",
  11: "novembre",
  12: "décembre",
};

// Erreurs Test :
// When a event card is created › a title, a label and a month are displayed,
// Unable to find an element with the text: /avril/.
// When slider is created › a list card is displayed,
// Unable to find an element with the text: janvier.
// Solution : les mois affichés en lettres ne sont pas corrects > Ajoutez 1 pour getMonth
// (export const getMonth = (date) => MONTHS[date.getMonth()];)
export const getMonth = (date) => MONTHS[date.getMonth()+1];
