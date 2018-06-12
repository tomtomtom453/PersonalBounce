# S4BounceLibrary

S4BounceLibrary is gebouwd als aanvulling op Bounce.js, een library gemaakt door [Luuk Derkx](https://github.com/drkx/bounce).


## Documentation

## Code
Het is bij installatie van bounce belangrijk om het bounce element binnen een parent container te zetten. Hiermee worden de grenzen van het bounce element bepaald. 
```html
<div class="box"> <!-- de container waarin bounce zich bevindt -->
        <div class="bounce" id="bounce"> </div> <--het bounce element zelf -->
    </div>
	
    <script> <-- Het initiëren van het bounce element -->
        var bounce = new Bounce();
        bounce.init();
    </script>
```

## Existing functions
De standaard functies van bounce.js

### gravity:
Met deze variabele kan de verticale snelheid van het element worden bepaald. Deze waarde moet bestaan uit een getal. Deze waarde kan tussen 0 en 10 worden ingesteld. De standaardwaarde is 1.
```html
<script>
	// maakt een bounce element aan die valt met een snelheid van 2
    var bounce = new Bounce();
    bounce.init('.bounce', {gravity: 2});
</script>
```

### updateSpeed
Met deze variabele kun je de snelheid aangeven waarmee je bounce object update. De standaard is 1 milliseconde. Dit kan aangepast worden tussen de 0 en de 10.
```html
<script>
    // maakt een bounce element aan die om de 5 milliseconde update
    var bounce = new Bounce();
    bounce.init('bounce1', {updateSpeed: 5});
</script>
```

## Toegevoegde functies
deze functies zijn door [Tom Korsten](https://github.com/tomtomtom453) gemaakt. 

### movement:
Deze functie zorgt ervoor dat het bounce element niet meer alleen omhoog en omlaag bounct, maar ook horizontaal over de pagina beweegt. De standaardwaarde hiervoor is 1 . Dit kan aangepast worden tussen de 0 en de 10.
```html
<script>
    //maakt een een element aan wat zich zijwaarts beweegt met een snelheid van 2
    var bounce = new Bounce();
    bounce.init('bounce1', {movement: 2});
</script>
```

### friction:
Deze functie zorgt ervoor dat het bounce element niet meer met volledige snelheid beweegt, maar dat deze friction het element afremt. De standaardwaarde hiervoor is 0.5 . Dit kan aangepast worden tussen de 0 en de 2.
```html
<script>
    //maakt een een element aan wat zich langzamer voortbeweegt, met een friction van 1.5
    var bounce = new Bounce();
    bounce.init('bounce1', {friction: 1.5});
</script>
```

## Demo 
---
Een demo is [hier](http://i369005.hera.fhict.nl/PersonalBounce/demo/) te zien.

## Motivatie
---
Ik heb deze toevoegingen gedaan omdat ik deze mogelijkheden miste in de orginele eerste versie van bounce.


## Installatie
---
Download het bounce.js bestand, stop het in je hoofdfolder, en  roep het aan op de pagina(s) waar je het wilt gebruiken.

Download of clone de repository, bekijk het voorbeeld in de demo. 
Voeg de bounce.js file toe aan je hoofdfolder of js file en roep het aan in de code.
