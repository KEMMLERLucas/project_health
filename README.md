# Projet Santé 

### Participants : Kemmler Lucas, Muller Océane, Saleem Nadim, Herolt Justine 

Ce projet consiste en la réalisation d'une application mobile de suivi d'activité. Elle est à desitinations des coachs sportifs, et leur permet de suivre et de conseiller efficacement leurs patients. 

### L'organisation du projet : 

Dans un premier temps, nous avons organisé le travail de groupe en utilisant le logiciel Trello : [lien du Trello](https://trello.com/invite/b/cxdAOL79/ATTIb1f0b3e74883130dc56499aba866e3b03F35A4FC/projet-health). 

Cela nous a permis de planifier les différentes tâches à réaliser, de les préciser et de se les répartir. 

Ensuite, nous nous sommes concentré sur la réalisation d'une maquette, pour organiser l'application, planifier ses visuels et s'assurer de son ergonomie.
Pour cela, nous avons utilisé le logiciel figma : [maquette Figma](https://www.figma.com/file/jwhtKrLGsfRS5ISWh5Svie/Health-application?type=design&node-id=0%3A1&mode=design&t=GGX37UxZ0c74jspS-1). 

Vous pourrez également retrouver un [document](Réflexions & analyse du sujet.pdf) regroupant l'étude et les réflexions quant au sujet, qui nous ont été utiles pour la maquette. 

### Les fonctionnalités principales : 

Pour utiliser notre application, le coach sportif doit, dans un premier temps, se créer un compte et se connecter. 

![image](https://github.com/KEMMLERLucas/project_health/assets/93048928/0c635ed5-6542-485e-83a1-2948d972de42)

Une fois connecté, il accède à la liste des patients qu'il suit : 

![Frame 19](https://github.com/KEMMLERLucas/project_health/assets/101339546/6f9527a6-b81c-45a3-9561-1df5ca3c7b9f)

Depuis cette page, il peut voir les informations de son profil, et les changer si nécessaire, en cliquant sur le bouton rouage, en haut à droite de l'interface. 
On retrouve également une bannière, confirmant l'état connecté du coach.

Page de modification des informations de l'utilisateur : 

![Frame 20](https://github.com/KEMMLERLucas/project_health/assets/101339546/ee2e4302-311a-488a-b85f-570a71b0d168)

Il peut également se déconnecter en cliquant sur le bouton rouge, en haut à droite. S'il clique, une popup de confirmation s'ouvre, pour s'assurer que l'utilisateur veut bien se déconnecter. S'il confirme cette action, il est déconnecté et redirigé à la page d'accueil de l'application. 

![Frame 21](https://github.com/KEMMLERLucas/project_health/assets/101339546/c863de35-de69-45b0-8835-674e62b4c3fa)

Le coach peut ensuite revenir à la liste des patients en cliquant sur la flèche en haut à gauche de l'interface. 

Ensuite, en cliquant sur l'un de ses patients, il aura accès à l'ensemble des informatios le concernant. Il accède à la page de suivi du patient, qui comporte plusieurs onglets : "Aujourd'hui", "Entraînement", "Historique", "Nutrition" et "Récompenses".  

Sur cette page, l'utilisateur peut retrouver l'avatar du patient, avec son nom et son prénom, son genre, son âge et son profil sportif (sédentaire, légèrement actif, peu actif, actif et très actif) : 

![Frame 11](https://github.com/KEMMLERLucas/project_health/assets/101339546/957115b2-fe12-4d80-a728-ea29f48c7968)

Cette bannière reste visible pendant la consultation de tous les onglets, pour faciliter la consultation des informations. L'utilisateur peut également accéder au bouton rouage, qui permet de modifier les informations du patient, en cas d'erreur ou de changement de situation. 

![Frame 12](https://github.com/KEMMLERLucas/project_health/assets/101339546/1269c8c4-feed-405c-9592-b0ae931274cd)

Pour revenir à la liste des patients, il peut cliquer sur la flèche gauche, en haut à gauche de la page. 

L'onglet Aujourd'hui est l'onglet affiché par défaut lorsque l'utilisateur arrive sur la page. Cet onglet présente le nombre de pas effectués ce jour, son poids, son IMC et l'historique des activités sportives réalisées (avec la date de l'activité, sa durée, et le nombre de calories brûlées) : 

![Frame 13](https://github.com/KEMMLERLucas/project_health/assets/101339546/158b9682-fb45-4a7d-97fd-ccee5c3048d3)

Les patients ont tous un objectif de nombre de pas défini à l'avance, et le composant "Nombre de pas" présente le nombre de pas effectués par rapport à l'objectif, avec une barre de progression et un pourcentage, ce qui rend plus simple l'évaluation de l'avancée du patient.

Dans le composant Poids du patient, le coach sportif peut retrouver le poids actuel du patient, et l'écart entre ce poids, et l'objectif de poids fixé par le patient. Il peut alors visualiser facilement les efforts faits, et ceux qu'il reste à faire pour atteindre cet objectif.

Il en est de même pour l'IMC : le stade de l'IMC (sous-poids, normal, surpoids, etc…) est affiché sous la valeur calculée, pour faciliter la consultation et le suivi. 

Enfin, pour une consultation simplifiée des activités réalisées, elles sont classées dans deux catégories : "Activités de la semaine" et "Activités plus anciennes". Elles sont présentées dans l'ordre antéchronologique (du plus récent au plus ancien). 

Ensuite, l'onglet "Entraînement" présente un ensemble d'exercices de musculations proposées par le coach et adapté au patient. Ces exercices sont regroupés en fonction des groupes musculaires qui sont concernés. 
Ainsi, en arrivant sur cet onglet, l'utilisateur peut visualiser l'ensemble des groupes musculaires, le niveau des exercices, le temps à y consacrer et le nombre d'exercices proposés. Ces informations sont présentées sous forme de listes déroulantes. 

Pour voir le détail des exercices proposés, le coach doit déplier le groupe musculaire qui l'intéresse. Il pourra donc voir le nom des différents exercices, le nombre de séries et le nombre de répétitions à effectuer. 

![Frame 17](https://github.com/KEMMLERLucas/project_health/assets/101339546/670496c3-dd41-4a5f-8fbd-e4cdae20b71f)

L'application propose également des graphiques, pour faciliter la visualisation des évolutions du poids du patient, mais également l'historique des activités sportives. Les coachs sportifs pourront donc retrouver ces graphiques dans l'onglet "Historique" de la page de suivi du patient : 

![Frame 14](https://github.com/KEMMLERLucas/project_health/assets/101339546/5b187c24-a33a-4199-a3a2-4702bb904c1e)

Si L'utilisateur dispose d'un rôle de médecin, il accèdera à un graphique supplémentaire, présentant l'évolution de l'état psychique du patient. 

![Frame 15](https://github.com/KEMMLERLucas/project_health/assets/101339546/2d0c2e1d-ff95-45ff-a01c-83e92da0175d)

De plus, pour assurer un suivi complet et une évolution de poids suivant l'objectif posé par le patient, l'application propose un suivi nutritionniste. L'utilisateur pourra retrouver ce suivi dans l'onglet "Nutrition". 

Il pourra y retrouver les aliments proposés pour chaque repas, ainsi que la quantité recommandée. 

![Frame 18](https://github.com/KEMMLERLucas/project_health/assets/101339546/75c3724a-9e85-4eed-b66d-7f7cc97f0e80)

Enfin, l'onglet "Récompenses" de la page de suivi propose de voir les badges gagnés par le patient en réalisant des séances de sport. Cela représente une aide pour le suivi du patient, car cela facilite la visualisation des objectifs réalisés, de manière ludique. 

![Frame 16](https://github.com/KEMMLERLucas/project_health/assets/101339546/057e2059-5882-4765-bb96-d23d812eb648)



