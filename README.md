[IN DEV]<br>
# NiceUI
Un système de diffusion de message écrit sur de multiples écrans

# Installation
(A besoin des paquets "git", "nodejs", et "npm")
```
$> sudo apt update && sudo apt install nodejs git npm && git clone https://github.com/mtribiere/NiceUI.git && cd NiceUI
$> npm install express
$> npm install socket.io
```

# Usage 
<i>Pour démarrer le server : </i>
```
$> nodejs server.js
```
<i>Pour accéder au "Mode visionnage" : </i><br>
Tapez l'adresse ip du serveur dans la barre d'adresse d'un navigateur(port 8080)<br>

```
(Exemple) http://192.168.1.101:8080
```

<i>Pour accéder au "Mode d'envoi" : </i><br>
Tapez l'adresse ip du serveur dans la barre d'adresse d'un navigateur avec un /send (port 8080)<br>

```
(Exemple) http://192.168.1.101:8080/send
```

# Auteur
[Jaaber]
