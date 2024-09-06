# Boolzapp - a (not very) innovative messaging platform


**Boolzapp** è una semplice applicazione di messaggistica che replica le funzionalità base di WhatsApp. L'app è stata realizzata per esercitazione con l'obiettivo di esplorare diverse tecniche di sviluppo front-end, utilizzando **Vue.js**, **CSS** e **Bootstrap Icons**. Inoltre, sono stati aggiunti ulteriori miglioramenti come il **tema scuro** e le **animazioni**.

## Milestones

### Milestone 1 - Layout di Base
- Creazione del layout iniziale con due colonne:
  - Colonna contatti a sinistra.
  - Colonna della chat a destra.
- Utilizzo di **Bootstrap** per gestire le icone.
- Definizione della lista contatti statica con Vue.js e visualizzazione dinamica con `v-for`.

### Milestone 2 - Selezione del Contatto
- Cliccando su un contatto, viene visualizzata la conversazione associata.
- Implementazione della logica di gestione del contatto attivo con `selectContact()`.
- Utilizzo di Vue.js per aggiornare dinamicamente la chat selezionata.

### Milestone 3 - Invio Messaggi
- Aggiunta ls funzionalità di invio messaggi tramite un input.
- I messaggi vengono aggiunti alla chat dinamicamente e inviati dall'utente (in verde).
- Risposta automatica simulata con un delay di 1 secondo.

### Milestone 4 - Ricerca Contatti
- Implementazione di una barra di ricerca per filtrare i contatti in base al nome.
- Utilizzo della computed property `filteredContacts()` per aggiornare dinamicamente la lista dei contatti in base all'input dell'utente.

### Milestone 5 - Eliminazione Messaggi
- Aggiunta di un menu a tendina su ciascun messaggio inviato dall'utente con opzioni per eliminare il messaggio.
- Il menu è visibile solo al passaggio del mouse sul messaggio.
- Gestione della visualizzazione del menu con `toggleDropdown()` e la cancellazione del messaggio tramite `deleteMessage()`.

## Implementazioni Aggiuntive

### 1. Tema Scuro/Chiaro
- Aggiunta la possibilità di alternare tra **tema chiaro** e **tema scuro** tramite un'icona di cambio tema.
- Le variabili CSS per i colori sono gestite con le classi `.light-mode` e `.dark-mode`.
- La logica del cambio tema è stata implementata in Vue con il metodo `toggleTheme()`.

### 2. Animazioni Messaggi
- Implementazione di animazioni per i messaggi:
  - Messaggi inviati dall'utente appaiono con un'animazione da destra a sinistra.
  - Messaggi ricevuti appaiono con un'animazione da sinistra a destra.

### 3. Ultimo Accesso Dinamico
- Sotto il nome del contatto attivo, viene mostrato l'ultimo accesso, che corrisponde all'orario dell'ultimo messaggio ricevuto da quel contatto.

### 4. Bot in Chat - Introduzione al Bot
Una delle ultime funzionalità aggiunte è stata l'integrazione di un bot che risponde automaticamente ai messaggi inviati dall'utente. Il bot è in grado di rispondere in modo casuale o in base a parole chiave specifiche, rendendo la conversazione più interattiva e divertente.

### Funzionalità principali

- **Risposte automatiche casuali**: Quando l'utente invia un messaggio, il bot risponde automaticamente con una frase scelta casualmente da una lista predefinita.
  
- **Risposte basate su parole chiave**: Il bot è in grado di riconoscere specifiche parole chiave nel messaggio dell'utente (ad esempio, "js", "css", "html") e rispondere con frasi pertinenti al contesto. Le parole chiave sono configurate in un oggetto e possono essere facilmente estese.

- **Tempistica delle risposte**: Il bot risponde con un ritardo di 1 secondo per simulare una conversazione più naturale.

### Esempio di funzionamento
Se l'utente invia un messaggio come "Ciao", il bot potrebbe rispondere con "Ciao! Facciamo prelezione domattina, pronto?". Se invece l'utente scrive "js", il bot risponderà con una frase come "Oh! Amo parlare di JavaScript!".

### Codice rilevante
Il bot utilizza un sistema di parole chiave e risposte casuali, implementato all'interno di Vue tramite due metodi principali:
- `getResponseByKeyword()`: Cerca una risposta pertinente basata su parole chiave.
- `getRandomBotResponse()`: Restituisce una risposta casuale da una lista predefinita.

### Possibili miglioramenti futuri
- Espandere il dizionario di parole chiave e risposte pertinenti.
- Aggiungere ulteriori funzionalità interattive, come la possibilità di rispondere a domande più complesse.


## Tecnologie Utilizzate

- **Vue.js** per la gestione dei dati e la reattività dell'interfaccia.
- **CSS3** con variabili personalizzate per la gestione dei temi e delle animazioni.
- **Luxon** per la gestione e formattazione delle date.
- **Bootstrap Icons** per le icone.
