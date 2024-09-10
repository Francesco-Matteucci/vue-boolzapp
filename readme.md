# Boolzapp - a (not very) innovative messaging platform

**Boolzapp** è una semplice applicazione di messaggistica che replica le funzionalità base di WhatsApp. L'app è stata realizzata per esercitazione con l'obiettivo di esplorare diverse tecniche di sviluppo front-end, utilizzando **Vue.js**, **CSS** e **Bootstrap Icons**. Sono stati aggiunti miglioramenti come il **tema scuro**, le **animazioni**, un **chatbot**, e altre funzionalità interattive.

## Milestones

### Milestone 1 - Layout di Base
- Creazione del layout iniziale con due colonne:
  - Colonna contatti a sinistra.
  - Colonna della chat a destra.
- Utilizzo di **Bootstrap Icons** per le icone.
- Definizione della lista contatti statica con Vue.js e visualizzazione dinamica con `v-for`.

### Milestone 2 - Selezione del Contatto
- Cliccando su un contatto, viene visualizzata la conversazione associata.
- Implementazione della logica di gestione del contatto attivo con `selectContact()`.
- Utilizzo di Vue.js per aggiornare dinamicamente la chat selezionata.

### Milestone 3 - Invio Messaggi
- Aggiunta della funzionalità di invio messaggi tramite un input.
- I messaggi vengono aggiunti alla chat dinamicamente e inviati dall'utente (in verde).
- Risposta automatica simulata con un delay di 1 secondo.

### Milestone 4 - Ricerca Contatti
- Implementazione di una barra di ricerca per filtrare i contatti in base al nome.
- Utilizzo della computed property `filteredContacts()` per aggiornare dinamicamente la lista dei contatti in base all'input dell'utente.

### Milestone 5 - Eliminazione Messaggi
- Aggiunta di un menu a tendina su ciascun messaggio inviato dall'utente con opzioni per eliminare il messaggio.
- Gestione della visualizzazione del menu con `toggleDropdown()` e cancellazione del messaggio tramite `deleteMessage()`.

## Implementazioni Aggiuntive

### 1. Tema Scuro/Chiaro
- Aggiunta la possibilità di alternare tra **tema chiaro** e **tema scuro** tramite un'icona di cambio tema.
- Le variabili CSS per i colori sono gestite con le classi `.light-mode` e `.dark-mode`.
- La logica del cambio tema è stata implementata in Vue con il metodo `toggleTheme()`.

### 2. Animazioni Messaggi
- Implementazione di animazioni per i messaggi:
  - Messaggi inviati dall'utente appaiono con un'animazione da destra a sinistra.
  - Messaggi ricevuti appaiono con un'animazione da sinistra a destra.

### 3. Splash Page
- All'apertura dell'applicazione viene mostrata una splash page di **benvenuto**, che introduce brevemente l'utente al cambio tema.
- La splash page include animazioni di fade-in/fade-out e un effetto pulsante sull'icona di tema.
- La splash page viene chiusa manualmente dall'utente tramite un bottone che la fa scomparire con una transizione animata.

### 4. Autoscroll della Chat
- Quando viene aggiunto un nuovo messaggio alla chat, l'applicazione scrolla automaticamente fino al messaggio più recente.
- Questo comportamento avviene sia per i messaggi inviati dall'utente sia per le risposte del bot.
- Lo scroll è gestito con il metodo `scrollToBottom()`, che sfrutta `$nextTick` di Vue.js per garantire che il DOM venga aggiornato prima dell'esecuzione dello scroll.

### 5. Ultimo Accesso Dinamico
- Sotto il nome del contatto attivo, viene mostrato l'ultimo accesso, che corrisponde all'orario dell'ultimo messaggio ricevuto da quel contatto.

### 6. Bot in Chat - Introduzione al Bot
Il bot integrato risponde automaticamente ai messaggi inviati dall'utente, rendendo la conversazione più interattiva.

#### Funzionalità principali

- **Risposte automatiche casuali**: Quando l'utente invia un messaggio, il bot risponde automaticamente con una frase scelta casualmente da una lista predefinita.
  
- **Risposte basate su parole chiave**: Il bot è in grado di riconoscere specifiche parole chiave nel messaggio dell'utente (ad esempio, "js", "css", "html") e rispondere con frasi pertinenti al contesto.

- **Tempistica delle risposte**: Il bot risponde con un ritardo di 1 secondo per simulare una conversazione più naturale.

#### Codice rilevante
Il bot utilizza due metodi principali:
- `getResponseByKeyword()`: Cerca una risposta pertinente basata su parole chiave.
- `getRandomBotResponse()`: Restituisce una risposta casuale da una lista predefinita.

### 7. Responsive Design
- Implementazione del design **responsive** per rendere l'applicazione fruibile su dispositivi mobili.
  - Su risoluzioni ridotte, viene visualizzata solo la lista contatti.
  - Cliccando su un contatto, la lista contatti scompare e viene mostrata solo la chat.
  - Un'icona "freccia indietro" consente di tornare alla lista contatti in modalità mobile.
  - In modalità desktop, la freccia scompare e la visualizzazione torna alle due colonne standard (lista contatti e chat).

## Tecnologie Utilizzate

- **Vue.js** per la gestione dei dati e la reattività dell'interfaccia.
- **CSS3** con variabili personalizzate per la gestione dei temi e delle animazioni.
- **Luxon** per la gestione e formattazione delle date.
- **Bootstrap Icons** per le icone.

## Possibili miglioramenti futuri

- **Migliorare il chatbot** con nuove risposte, funzionalità basate su eventi esterni come meteo o orario.
- **Notifiche push** per i nuovi messaggi.
- **Implementare API di messaggistica** per gestire conversazioni in tempo reale.
