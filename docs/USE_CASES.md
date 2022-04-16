# Workflow : ORDER

> 1. Le client passe une commande.
>
> - a) On lui adresse un pdf récapitulatif de commande.
> - b) Dans un même temps, on rédige un bon de livraison pour le transporteur.
> - !!! L’état initial de la commande est à en attente « WAITING »

> 2. Le transporteur récupère les articles
>
> - on met à jour l’état de la commande à en cours de livraison. « DELIVERING »

> 3. Les articles sont réceptionnés par le client
>
> - on passe le statut a livré « DELIVERED »

> 4. Le paiement est effectué
>
> - on met à jour la commande avec le statut « PAID »
