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

## Tecnologie Utilizzate

- **Vue.js** per la gestione dei dati e la reattività dell'interfaccia.
- **CSS3** con variabili personalizzate per la gestione dei temi e delle animazioni.
- **Luxon** per la gestione e formattazione delle date.
- **Bootstrap Icons** per le icone.
