## Instructions pour demander la mise en prod des modifications

Il est important de ne **jamais** modifier le fichier .gitlab-ci.yml

### 1. Modifications du code
Il est possible de modifier le code directement dans ce dépôt puis d'effectuer un commit et un push classiquement

### 2. Création de version 
Lorsque la version du code en l'état vous convient, **tagguez** le dépôt en incrémentant la version (comme vous le souhaitez). Par exemple, si le dernier tag est 1.2.3, vous pouvez tagguer 1.2.4 ou encore 1.3.0 ou encore 1.4.0, c'est vous qui choisissez. La version doit être au format majeure.mineure.patch. Le tag de la branche master lance une pipeline. Vérifiez que la pipeline est validée dans l'onglet **pipelines** du dépôt.

### 3. Demande de mise en ligne
Lorsque votre version a lancé une pipeline qui a été validée (étape 2), me contacter par SMS ou mail afin de demander sa mise en ligne. Précisez le numéro de version et je m'occuperai de la mise en ligne

### Délais de mise en ligne garantis ###
- du 20 juin au 4 juillet : 6h
- du 4 juillet à fin août : 48h
