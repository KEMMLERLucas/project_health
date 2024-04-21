# Projet Santé 

### Participants : Kemmler Lucas, Muller Océane, Saleem Nadim, Herolt Justine 

Ce projet consiste en la réalisation d'une application mobile de suivi d'activité. Elle est à desitinations des coachs sportifs, et leur permet de suivre et de conseiller efficacement leurs patients. 

### L'organisation du projet : 

Dans un premier temps, nous avons organisé le travail de groupe en utilisant le logiciel Trello : [lien du Trello](https://trello.com/invite/b/cxdAOL79/ATTIb1f0b3e74883130dc56499aba866e3b03F35A4FC/projet-health). 

Cela nous a permis de planifier les différentes tâches à réaliser, de les préciser et de se les répartir. 

Ensuite, nous nous sommes concentré sur la réalisation d'une maquette, pour organiser l'application, planifier ses visuels et s'assurer de son ergonomie.
Pour cela, nous avons utilisé le logiciel figma : [maquette Figma](https://www.figma.com/file/jwhtKrLGsfRS5ISWh5Svie/Health-application?type=design&node-id=0%3A1&mode=design&t=GGX37UxZ0c74jspS-1). 

Vous pourrez également retrouver un document précisant les sources d'inspiration et une étude de l'existant, qui nous ont été utiles pour la maquette. 

### Les fonctionnalités : 

Pour utiliser notre application, le coach sportif doit, dans un premier temps, se créer un compte et se connecter. 

![image](https://github.com/KEMMLERLucas/project_health/assets/93048928/0c635ed5-6542-485e-83a1-2948d972de42)

Une fois connecté, il accède à la liste des patients qu'il suit : [Captures d'écran de la liste des patients]
Depuis cette page, il peut voir les informations de son profil, et les changer si nécessaire, en cliquant sur le bouton cloche, en haut à droite de l'interface (normal ?). 
On retrouve également une bannière, confirmant l'état connecté du coach.

Ensuite, en cliquant sur l'un de ses patients, il aura accès à l'ensemble des informatios le concernant. Il accède à la page de suivi du patient, qui comporte plusieurs onglets : "Aujourd'hui", "Historique" et "Récompenses".  

Sur cette page, l'utilisateur peut retrouver l'avatar du patient, avec son nom et son prénom, son genre, son âge et son profil sportif (sédentaire, légèrement actif, peu actif, actif et très actif) : 

![En_tete](https://github.com/KEMMLERLucas/project_health/assets/101339546/2846fe2d-a60c-4225-9220-66b532ab2e7c)

Cette bannière reste visible pendant la consultation de tous les onglets, pour faciliter la consultation des informations. L'utilisateur peut également accéder au bouton rouage, qui permet de modifier les informations du patient, en cas d'erreur ou de changement de situation. 

![Modif_infos_patient](https://github.com/KEMMLERLucas/project_health/assets/101339546/9d436088-3fb3-4e91-a303-ce59914e30e1)

Pour revenir à la liste des patients, il peut cliquer sur la flèche gauche, en haut à gauche de la page. 

L'onglet Aujourd'hui est l'onglet affiché par défaut lorsque l'utilisateur arrive sur la page. Cet onglet présente le nombre de pas effectués ce jour, son poids, son IMC et l'historique des activités sportives réalisées (avec la date de l'activité, sa durée, et le nombre de calories brûlées) : 

![Aujourd'hui](https://github.com/KEMMLERLucas/project_health/assets/101339546/11861063-5074-4d74-964d-ec53b3574f06)

Les patients ont tous un objectif de nombre de pas défini à l'avance, et le composant "Nombre de pas" présente le nombre de pas effectués par rapport à l'objectif, avec une barre de progression et un pourcentage, ce qui rend plus simple l'évaluation de l'avancée du patient.

Dans le composant Poids du patient, le coach sportif peut retrouver le poids actuel du patient, et l'écart entre ce poids, et l'objectif de poids fixé par le patient. Il peut alors visualiser facilement les efforts faits, et ceux qu'il reste à faire pour atteindre cet objectif.

Il en est de même pour l'IMC : le stade de l'IMC (sous-poids, normal, surpoids, etc…) est affiché sous la valeur calculée, pour faciliter la consultation et le suivi. 

Enfin, pour une consultation simplifiée des activités réalisées, elles sont classées dans trois catégories : "Activités de la semaine", "Activités plus anciennes" et "Activités de l'année dernière". Elles sont présentées dans l'ordre antéchronologique (du plus récent au plus ancien). 

L'application propose également des graphiques, pour faciliter la visualisation des évolutions du poids du patient, mais également l'historique des activités sportives. Les coachs sportifs pourront donc retrouver ces graphiques dans l'onglet "Historique" de la page de suivi du patient : 

[Refaire capture]

Si L'utilisateur dispose d'un rôle de médecin, il accèdera à un graphique supplémentaire, présentant l'évolution de l'état psychique du patient. [Capture]

Enfin, l'onglet "Récompenses" de la page de suivi propose de voir les badges gagnés par le patient en réalisant des séances de sport. Cela représente une aide pour le suivi du patient, car cela facilite la visualisation des objectifs réalisés, de manière ludique. 

[Refaire capture]



