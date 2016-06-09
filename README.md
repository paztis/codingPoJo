# codingPoJo

# Sujet : Jeu du Puissance 4

Le but de ce Coding Dojo "Javascript" est d'implémenter un jeu de puissance 4, à la fois côté front-end et côté back-end.

![Image du Puissance 4](https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Puissance4_01.svg/langfr-220px-Puissance4_01.svg.png)

## Règle du puissance 4

Le but du jeu est d'aligner 4 pions sur une grille comptant 6 rangées et 7 colonnes.
Chaque joueur dispose de 21 pions d'une couleur (par convention, en général jaune ou rouge).
Tour à tour les deux joueurs placent un pion dans la colonne de leur choix, le pion coulisse alors jusqu'à la position la plus basse possible dans la dite colonne à la suite de quoi c'est à l'adversaire de jouer. Le vainqueur est le joueur qui réalise le premier un alignement (horizontal, vertical ou diagonal) d'au moins quatre pions de sa couleur.
Si, alors que toutes les cases de la grille de jeu sont remplies, aucun des deux joueurs n'a réalisé un tel alignement, la partie est déclarée nulle.


# User Stories

1. Front-End - Créer une grille de taille 6x7 (lignes x colonnes)
    * implémenter la grille (TDD)
    * afficher la grille

2. Front-End - Permettre l'ajout d'un jeton dans une colonne. Les jetons s'empilent : après un ajout, le jeton doit occuper l'emplacement vide le plus bas dans la colonne. Il est impossible d'avoir plus de 6 jetons par colonne.
    * implémenter l'ajout dans la grille (TDD)
    * afficher la grille avec les jetons et l'ajout d'un jeton au clic sur la colonne

3. Back-End - Multi-Joueur : créer une API REST permettant à un joueur d'ajouter un jeton à une colonne

4. 2 couleurs de jetons existent : rouge ou jaune
    * l'ajout d'un jeton doit tenir compte de sa couleur
    * l'IHM doit permettre d'ajouter des jetons rouge ou jaune

5. Front-End - Afficher un message de victoire lorsque 4 jetons identiques sont alignés. L'alignement peut être horizontal, vertical ou en diagonale.

6. Back-End - créer une API REST qui retourne l'état de la grille

7. Front-End - utiliser l'API REST pour afficher l'état de la grille

8. Front-End - utiliser l'API REST pour envoyer les actions du joueur



Autres User stories (pistes):
* Back-end : implémenter une IA
* Front-end : animation des pièces qui tombent
* Front-end : animation de victoire / défaite

# Participants

* Audience
  * Arnaud
  * Emeric
  * Florian
  * Karine
  * Julien
  * Romain
* Organisateurs
  * Jérôme
  * Pierre



# Sessions



## Session 1 : 14/04/2016

### Participants
* Absents : Karine
* Time keeper : Pierre

### Avancement
US 1 terminée :
* une grille 6x7 est testée et implémentée
* IHM : la grille s'affiche dans une page html sous forme d'un tableau généré via un template (utilisation de la lib underscore), avec un style CSS réalisé avec un certain talent graphique

US 2 en cours :
* il est possible d'ajouter un jeton dans une colonne
* le test qui vérifie l'empilement dans une colonne ainsi que la remontée d'une erreur est déclenchée lorsque l'on ajoute un 7e jeton à une colonne est en échec
* IHM : la grille n'affiche pas encore de jeton
* IHM : il n'est pas encore possible d'ajouter de jetons dans la grille

### A venir (?)
* terminer la US2
* gestion des 2 couleurs de jeton
* calcul d'une combinaison gagnante
* multijoueur avec back-end nodeJS

### ROTI
3,6



**Merci à tous!**



## Session 2 : 09/06/2016

### Participants
* Absents : Florian
* Time keeper : Pierre / Jérôme

### Avancement
Les US 1 & 2 sont terminées, une copie de la grille a été faite côté serveur

US 1 terminée :
* une grille 6x7 est testée et implémentée
* IHM : la grille s'affiche dans une page html sous forme d'un tableau généré via un template (utilisation de la lib underscore)
* la CSS a été refondue pour un résultat époustouflant

US 2 terminée :
* IHM :
** on peut ajouter un jeton au clic sur une colonne
** l'objet Grid implémente désormais un modèle "backbone" afin de gérer le déclenchement des événements sur l'ajout

US 3 en cours :
* Le report de la logique métier et des tests correspondant est fait côté serveur
* Back-end : l'objet Grid est désormais une classe ECMASCRIPT 2016
* Test en cours : api rest d'ajout d'un jeton dans une colonne -> test KO (non implémenté)


### A venir
* terminer la US3 
* branchement du backend et du front end via les api rest
* mise en place d'un mécanisme de notification (websockets, ou server-side events)
* calcul d'une combinaison gagnante

### ROTI
3,8



**Merci à tous!**