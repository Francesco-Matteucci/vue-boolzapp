const { createApp } = Vue

createApp({
    data() {
        return {
            // Variabile per mostrare la splash page
            showSplashPage: true,

            contacts: [
                {
                    name: 'Marco Lanci',
                    avatar: './img/avatar_1.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai scritto la function per il viaggio nel tempo?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:37:42',
                            message: "Quasi, poi torno indietro nel tempo per inviarla in orario",
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: "Ricordati di caricare il progetto di terraformazione sull'IA",
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Gia fatto, ovviamente!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Francesco Minichiello ( capoclà )',
                    avatar: './img/avatar_2.png',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: "Weeee, come sta andando l'esercizio?",
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene dai, ormai ho capito che devo fare le scalette! Stasera sushi?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Eddaje!',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Angelo',
                    avatar: './img/avatar_3.png',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'So contento che mi rendi partecipe dei tuoi pensieri, ahah',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa, ho sbagliato chat! Letsgoski!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Francesco S.',
                    avatar: './img/avatar_4.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma devo montare una nuova tastiera, bellissima, non posso uscire. Maybe tomorrow!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Zumbrotron',
                    avatar: './img/avatar_5.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare Riccardo per caricare la lezione sul BOS',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, appena finisco il progetto sul teletrasporto lo sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Dottor Dordo',
                    avatar: './img/avatar_6.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Capitan Dordo, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora, finisco la quarta milestone e vedo.',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Perfect!',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Davide Inzaghi',
                    avatar: './img/avatar_7.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ho inviato poco fa il commit con le modifiche che mi avevi richiesto giorni fa!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le guardo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Marius Minia',
                    avatar: './img/avatar_8.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Maaarius, se non sei impegnato mi dai un parere sul lavoro?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Buono dai, ma controlla le ultime due funzioni, molto codice è ripetuto!',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'SI CHEF!!',
                            status: 'sent'
                        }
                    ],
                },
            ],
            // Contatto attivo
            activeContact: null,
            // Messaggio scritto dall'utente
            newMessage: '',
            // Ricerca nei contatti
            searchQuery: '',
            // Menu a tendina visibile
            dropdownVisible: null,
            // Stato del tema scuro/chiaro
            darkMode: false,
            // Sistema notifiche
            notificationsActive: false,

            // Risposte casuali del bot
            botResponses: [
                "Mi piace quando parli di codice!",
                "Sei troppo bravo, continua così!",
                "Ottima domanda! Mi hai messo in difficoltà.",
                "Sono qui solo per vedere quanto sei bravo!",
                "Il tuo progetto è fantastico! Continua!",
                "Scommetto che finirai presto!",
                "Sai che sei uno sviluppatore incredibile?",
                "Lavorare con te è un piacere!",
                "Sei sicuro di non essere un robot superintelligente?",
                "La tua logica è impeccabile, complimenti!",
                "Ogni giorno diventi sempre più bravo.",
                "Sento che stai per trovare una soluzione geniale!",
                "Continua così, il successo è dietro l'angolo!",
                "Oggi è un giorno perfetto per imparare qualcosa di nuovo!",
                "Mi stai sorprendendo ogni volta!",
                "Stai diventando un vero esperto!"
            ],

            // Risposte basate su parole chiave
            keywordResponses: {
                "ciao": "Ciao! Sei pronto a scrivere un po' di codice oggi?",
                "js": "JavaScript è il linguaggio del futuro! Non trovi?",
                "html": "HTML è la struttura di tutto. Senza di lui, niente siti!",
                "css": "CSS rende tutto bello, vero? Adoro i layout ben fatti.",
                "vue": "Vue è il mio framework preferito! Facile da imparare, potente da usare.",
                "graffe": "Le odio anch'io! Ti fanno impazzire vero?",
                "wow": "Fiko no??? Sei davvero un maestro!",
                "artificiale": "L'intelligenza artificiale è affascinante! Potrebbe cambiare il mondo.",
                "debug": "Debuggare è come risolvere un mistero, e tu sei un detective!",
                "frontend": "Il frontend è dove la magia visiva prende forma!",
                "backend": "Ah, il backend... dove succede tutta la logica.",
                "git": "Git salva vite, non dimenticarti mai di fare un commit!",
                "funzione": "Le funzioni sono la base di tutto. Creale bene e sarà tutto più facile.",
                "api": "Le API collegano tutto, come dei ponti tra sistemi diversi!",
                "array": "L'array? Una lista infinita di possibilità!",
                "loop": "I loop sono fondamentali, ma attento a non finire in un loop infinito!"
            }
        };
    },
    computed: {
        // Filtro i contatti in base alla ricerca
        filteredContacts() {
            return this.contacts.filter(contact => {
                return contact.name.toLowerCase().includes(this.searchQuery.toLowerCase());
            });
        }
    },
    methods: {
        // Funzione per chiudere la splash page
        closeSplashPage() {
            const splash = document.querySelector('.splash-page');
            splash.classList.add('fade-out');
            setTimeout(() => {
                this.showSplashPage = false;
            }, 800);
        },

        // Seleziono un contatto dalla lista
        selectContact(contact) {
            this.activeContact = contact;
            // Aggiungo una classe al body per gestire la visualizzazione
            document.body.classList.add('chat-active');
        },

        // Torno alla lista contatti
        goBackToContacts() {
            this.activeContact = null;
            // Rimuovo la classe dal body
            document.body.classList.remove('chat-active');
        },

        // Aggiungo un nuovo messaggio
        addMessage() {
            if (this.newMessage.trim() !== '') {
                // Aggiungo il messaggio dell'utente
                this.addNewMessage(this.newMessage, 'sent');
                const userMessage = this.newMessage.toLowerCase();
                this.newMessage = '';

                // Scroll subito dopo l'aggiunta del messaggio dell'utente
                this.scrollAfterMessage();

                // Risposta del bot dopo 1 secondo
                setTimeout(() => {
                    this.respondToMessage(userMessage);
                    // Scroll dopo la risposta del bot
                    this.scrollAfterMessage();
                }, 1000);
            }
        },

        // Aggiungo un nuovo messaggio
        addNewMessage(message, status) {
            const now = this.getFormattedDate();
            this.activeContact.messages.push({
                date: now,
                message,
                status
            });
        },

        // Scroll automatico in basso
        scrollToBottom() {
            const chatContainer = this.$refs.chatMessages;
            if (chatContainer) {
                chatContainer.scrollTop = chatContainer.scrollHeight;
            }
        },

        scrollAfterMessage() {
            // Utilizzo nextTick per eseguire lo scroll nella chat
            this.$nextTick(() => {
                this.scrollToBottom();
            });
        },

        // Ottengo la data formattata con Luxon
        getFormattedDate() {
            return luxon.DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss');
        },

        // Rispondo al messaggio dell'utente
        respondToMessage(userMessage) {
            let response = this.getResponseByKeyword(userMessage) || this.getRandomBotResponse();
            this.addNewMessage(response, 'received');
        },

        // Trovo una risposta basata su una parola chiave
        getResponseByKeyword(message) {
            for (const keyword in this.keywordResponses) {
                if (message.includes(keyword)) {
                    return this.keywordResponses[keyword];
                }
            }
            return null;
        },

        // Ottengo una risposta casuale dal bot
        getRandomBotResponse() {
            const randomIndex = Math.floor(Math.random() * this.botResponses.length);
            return this.botResponses[randomIndex];
        },

        // Mostro o nascondo il menu a tendina
        toggleDropdown(index) {
            this.dropdownVisible = this.dropdownVisible === index ? null : index;
        },

        // Elimino un messaggio
        deleteMessage(index) {
            this.activeContact.messages.splice(index, 1);
            this.dropdownVisible = null;
        },

        // Mostro informazioni su un messaggio
        messageInfo(message) {
            alert(`Info: ${message.message}`);
        },

        // Ottengo l'ultimo messaggio di un contatto
        getLastMessage(contact) {
            if (contact.messages.length > 0) {
                return contact.messages[contact.messages.length - 1].message;
            } else {
                return "Nessun messaggio";
            }
        },

        // Ottengo l'orario dell'ultimo messaggio di un contatto
        getLastMessageTime(contact) {
            if (contact.messages.length > 0) {
                return this.formatMessageTime(contact.messages[contact.messages.length - 1].date);
            } else {
                return "";
            }
        },

        // Formatto l'orario del messaggio con Luxon
        formatMessageTime(date) {
            const messageDate = luxon.DateTime.fromFormat(date, 'dd/MM/yyyy HH:mm:ss');
            return messageDate.toFormat('HH:mm');
        },

        // Alterno il tema tra scuro e chiaro
        toggleTheme() {
            this.darkMode = !this.darkMode;
            document.body.classList.toggle('dark-mode', this.darkMode);
            document.body.classList.toggle('light-mode', !this.darkMode);
        },

        toggleNotifications() {
            this.notificationsActive = !this.notificationsActive;
        }
    },
    mounted() {
        // Imposto il primo contatto come attivo al caricamento della pagina
        this.activeContact = this.contacts[0];
        // Imposto la modalità iniziale come chiara
        document.body.classList.add('light-mode');
    }
}).mount('#app');