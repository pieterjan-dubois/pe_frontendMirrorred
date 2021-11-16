# Frontend service

This is the service that will connect to the backend and render the received JSON-data to a more visually pleasing format.

## Provided
* Een codebase, geschreven in ReactJS, een Javascript-framework. Je bent wellicht niet bekend met deze technologie, een situatie waar een DevOps-engineer dagelijks mee geconfronteerd wordt. Kennis van de code is echter niet vereist.

## Requirement
* Creëer je eigen repository, door de files te clonen en zelf te pushen of door een fork te nemen.
* Een Dockerfile om deze applicatie in een container te verpakken. Hiervoor zal je moeten zoeken hoe je dit best aanpakt. Dit vind je met het nodige Google-werk echter zeker terug. De info in [INSTALL.md](https://git.uclllabs.be/bs2/pe/pe_frontend/-/blob/main/INSTALL.md) kan je al opweg helpen.
* Zet een CI/CD systeem op, zoals gezien in de lessen.
* Een minimale aanpassing in de code: Er staat een URL waar verwezen wordt naar de Backend-service: deze zal je uiteraard moeten vervangen door een publiek toegankele URL voor je backend vanop je productieserver. De betreffende lijn code vind je [hier](https://git.uclllabs.be/-/ide/project/bs2/pe/pe_frontend/tree/main/-/src/App.js/#L10)

## Acceptance Criteria
* Zorg dat je een werkende container automatisch kan builden met Gitlab CI.
