const { createApp } = Vue

createApp({
    data() {
        return {
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
                            date: '10/01/2020 15:50:00',
                            message: "Ricordati di caricare il progetto di terraformazione sull'IA",
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto, ovviamente!',
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
            // Menu a tendina
            dropdownVisible: null,
            // Stato del tema scuro/chiaro
            darkMode: false,
        };
    },
    computed: {
        // Filtro i contatti in base alla ricerca effettuata
        filteredContacts() {
            return this.contacts.filter(contact => {
                return contact.name.toLowerCase().includes(this.searchQuery.toLowerCase());
            });
        }
    },
    methods: {
        // Seleziono un contatto dalla lista
        selectContact(contact) {
            this.activeContact = contact;
        },
        // Aggiungo un nuovo messaggio
        addMessage() {
            if (this.newMessage.trim() !== '') {
                this.addNewMessage(this.newMessage, 'sent');
                this.newMessage = '';

                // Risposta automatica dopo 1 secondo
                setTimeout(() => {
                    this.addNewMessage('Ok!', 'received');
                }, 1000);
            }
        },
        // Creo una funzione per aggiungere un messaggio
        addNewMessage(message, status) {
            const now = this.getFormattedDate();
            this.activeContact.messages.push({
                date: now,
                message,
                status
            });
        },
        // Creo una funzione che restituisce la data formattata con Luxon
        getFormattedDate() {
            return luxon.DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss');
        },
        // Mostro o nascondo il menu a tendina per un messaggio
        toggleDropdown(index) {
            this.dropdownVisible = this.dropdownVisible === index ? null : index;
        },
        // Elimino un messaggio dalla chat
        deleteMessage(index) {
            this.activeContact.messages.splice(index, 1);
            this.dropdownVisible = null;
        },
        // Mostro informazioni sul messaggio
        messageInfo(message) {
            alert(`Info: ${message.message}`);
        },
        // Creo una funzione che restituisce l'ultimo messaggio di un contatto
        getLastMessage(contact) {
            if (contact.messages.length > 0) {
                return contact.messages[contact.messages.length - 1].message;
            } else {
                return "Nessun messaggio";
            }
        },
        // Creo una funzione che restituisce l'orario dell'ultimo messaggio di un contatto
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
        // Creo una funzione che alterna il tema scuro con quello chiaro
        toggleTheme() {
            this.darkMode = !this.darkMode;

            if (this.darkMode) {
                document.body.classList.remove('light-mode');
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
                document.body.classList.add('light-mode');
            }
        }
    },
    mounted() {
        // Imposto il primo contatto come attivo, quando la pagina viene caricata
        this.activeContact = this.contacts[0];
    }
}).mount('#app');