---
layout: post
title:  "LoginController"
date:   2015-11-17 00:01:53 +0800
categories: web
nb: 3
---

### Test 1 : longueur du mot de passe

##### Pré conditions
Page d'accueil  
Utilisateur déconnecté

##### Etapes
Entrer une adresse mail  
Entrer un mot de passe de moins de 8 caractères  
Cliquer sur connection

##### Résultats attendus
Une erreur s'affiche indiquant que le mot de passe est trop court

### Test 2 : complexité du mot de passe

##### Pré conditions
Page d'accueil  
Utilisateur déconnecté

##### Etapes
Entrer une adresse mail  
Entrer un mot de passe ne possédant pas de lettres *ou* pas de chiffre  
Cliquer sur connection

##### Résultats attendus
Une erreur s'affiche indiquant que le mot de passe manque un caractère requis

### Test 3 : champs vide

##### Pré conditions
Page d'accueil  
Utilisateur déconnecté

##### Etapes
Ne pas entrer d'adresse mail/mot de passe  
Cliquer sur connection

##### Résultats attendus
Une erreur s'affiche indiquant que les deux champs sont requis