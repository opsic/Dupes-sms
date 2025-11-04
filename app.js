// Enhanced Twilio SMS Manager - Individual Profiles & Message Threads

class EnhancedTwilioSMSManager {
    constructor() {
        this.numbers = [];
        this.messages = {};
        this.selectedNumber = null;
        this.selectedThread = null;
        this.init();
    }
    
    init() {
        // Auto-load demo on page load
        this.loadDemoNumbers();
    }
    
    loadDemoNumbers() {
        // Create demo phone numbers with enhanced data
        this.numbers = [
            {
                sid: 'PN001',
                number: '+1 (555) 123-4567',
                name: 'Business Line',
                icon: '💼',
                type: 'business'
            },
            {
                sid: 'PN002',
                number: '+1 (555) 987-6543',
                name: 'Personal Line',
                icon: '👤',
                type: 'personal'
            },
            {
                sid: 'PN003',
                number: '+1 (555) 456-7890',
                name: 'Support Line',
                icon: '🎯',
                type: 'support'
            }
        ];
        
        // Create enhanced message threads for each number
        this.messages = {
            'PN001': [
                {
                    contact: 'John (ABC Corp)',
                    number: '+1 (555) 111-1111',
                    messages: [
                        {
                            body: 'Hi, this is John from ABC Corp. Can we schedule a meeting?',
                            direction: 'received',
                            from: '+1 (555) 111-1111',
                            time: new Date(Date.now() - 7200000)
                        },
                        {
                            body: 'Sure! How about tomorrow at 2pm?',
                            direction: 'sent',
                            to: '+1 (555) 111-1111',
                            time: new Date(Date.now() - 7000000)
                        },
                        {
                            body: 'Perfect! I\'ll send over the agenda',
                            direction: 'received',
                            from: '+1 (555) 111-1111',
                            time: new Date(Date.now() - 6800000)
                        }
                    ]
                },
                {
                    contact: 'Sarah (XYZ Inc)',
                    number: '+1 (555) 222-2222',
                    messages: [
                        {
                            body: 'Hello, this is Sarah from XYZ Inc. Following up on our proposal.',
                            direction: 'received',
                            from: '+1 (555) 222-2222',
                            time: new Date(Date.now() - 3600000)
                        },
                        {
                            body: 'Thanks Sarah, I\'ll review it today.',
                            direction: 'sent',
                            to: '+1 (555) 222-2222',
                            time: new Date(Date.now() - 3500000)
                        },
                        {
                            body: 'Great! Let me know if you have any questions',
                            direction: 'received',
                            from: '+1 (555) 222-2222',
                            time: new Date(Date.now() - 3400000)
                        }
                    ]
                },
                {
                    contact: 'Mike (Legal)',
                    number: '+1 (555) 333-3333',
                    messages: [
                        {
                            body: 'Quick question about the contract terms.',
                            direction: 'received',
                            from: '+1 (555) 333-3333',
                            time: new Date(Date.now() - 1800000)
                        }
                    ]
                }
            ],
            'PN002': [
                {
                    contact: 'Mom',
                    number: '+1 (555) 444-4444',
                    messages: [
                        {
                            body: 'Hey! Are we still on for dinner tonight?',
                            direction: 'received',
                            from: '+1 (555) 444-4444',
                            time: new Date(Date.now() - 5400000)
                        },
                        {
                            body: 'Yes! See you at 7pm',
                            direction: 'sent',
                            to: '+1 (555) 444-4444',
                            time: new Date(Date.now() - 5300000)
                        },
                        {
                            body: 'Don\'t forget to pick up dessert!',
                            direction: 'received',
                            from: '+1 (555) 444-4444',
                            time: new Date(Date.now() - 5200000)
                        }
                    ]
                },
                {
                    contact: 'Alex',
                    number: '+1 (555) 555-5555',
                    messages: [
                        {
                            body: 'Don\'t forget to pick up milk on your way home',
                            direction: 'received',
                            from: '+1 (555) 555-5555',
                            time: new Date(Date.now() - 2700000)
                        },
                        {
                            body: 'Got it! Anything else?',
                            direction: 'sent',
                            to: '+1 (555) 555-5555',
                            time: new Date(Date.now() - 2600000)
                        }
                    ]
                },
                {
                    contact: 'Jessica',
                    number: '+1 (555) 666-6666',
                    messages: [
                        {
                            body: 'Happy birthday! Hope you have a great day! 🎉',
                            direction: 'received',
                            from: '+1 (555) 666-6666',
                            time: new Date(Date.now() - 900000)
                        }
                    ]
                }
            ],
            'PN003': [
                {
                    contact: 'Customer #1234',
                    number: '+1 (555) 777-7777',
                    messages: [
                        {
                            body: 'I need help with my account login',
                            direction: 'received',
                            from: '+1 (555) 777-7777',
                            time: new Date(Date.now() - 4500000)
                        },
                        {
                            body: 'I can help with that. What\'s your email address?',
                            direction: 'sent',
                            to: '+1 (555) 777-7777',
                            time: new Date(Date.now() - 4400000)
                        },
                        {
                            body: 'customer@example.com',
                            direction: 'received',
                            from: '+1 (555) 777-7777',
                            time: new Date(Date.now() - 4300000)
                        },
                        {
                            body: 'Thanks! I\'ve reset your password. Check your email.',
                            direction: 'sent',
                            to: '+1 (555) 777-7777',
                            time: new Date(Date.now() - 4200000)
                        }
                    ]
                },
                {
                    contact: 'Customer #5678',
                    number: '+1 (555) 888-8888',
                    messages: [
                        {
                            body: 'When will my order ship?',
                            direction: 'received',
                            from: '+1 (555) 888-8888',
                            time: new Date(Date.now() - 2100000)
                        },
                        {
                            body: 'Your order will ship within 24 hours.',
                            direction: 'sent',
                            to: '+1 (555) 888-8888',
                            time: new Date(Date.now() - 2000000)
                        }
                    ]
                },
                {
                    contact: 'Customer #9012',
                    number: '+1 (555) 999-9999',
                    messages: [
                        {
                            body: 'The product is defective, I need a refund',
                            direction: 'received',
                            from: '+1 (555) 999-9999',
                            time: new Date(Date.now() - 600000)
                        }
                    ]
                }
            ]
        };
        
        // Render the phone profiles
        this.renderPhoneProfiles();
    }
    
    renderPhoneProfiles() {
        const profilesContainer = document.getElementById('phoneProfiles');
        profilesContainer.innerHTML = '';
        
        this.numbers.forEach(number => {
            const profileCard = this.createProfileCard(number);
            profilesContainer.appendChild(profileCard);
        });
    }
    
    createProfileCard(number) {
        const card = document.createElement('div');
        card.className = 'phone-profile-card';
        card.onclick = () => this.selectNumber(number.sid);
        
        const stats = this.getNumberStats(number.sid);
        const recentContacts = this.getRecentContacts(number.sid);
        
        card.innerHTML = `
            <div class="profile-header">
                <div class="profile-icon">${number.icon}</div>
                <div class="profile-info">
                    <h3>${number.name}</h3>
                    <p>${number.number}</p>
                </div>
            </div>
            <div class="profile-stats">
                <div class="stat-item">
                    <div class="stat-value">${stats.totalMessages}</div>
                    <div class="stat-label">Messages</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${stats.totalContacts}</div>
                    <div class="stat-label">Contacts</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${stats.todayMessages}</div>
                    <div class="stat-label">Today</div>
                </div>
            </div>
            <div class="recent-contacts">
                <h4>Recent Contacts</h4>
                ${recentContacts.map(contact => `
                    <div class="contact-preview">
                        <span class="contact-name">${contact.name}</span>
                        <span class="contact-message">${contact.lastMessage}</span>
                        <span class="contact-time">${contact.time}</span>
                    </div>
                `).join('')}
            </div>
        `;
        
        return card;
    }
    
    getNumberStats(numberSid) {
        const threads = this.messages[numberSid] || [];
        const totalMessages = threads.reduce((sum, thread) => sum + thread.messages.length, 0);
        const totalContacts = threads.length;
        
        // Count today's messages
        const today = new Date().toDateString();
        const todayMessages = threads.reduce((sum, thread) => {
            return sum + thread.messages.filter(msg => 
                new Date(msg.time).toDateString() === today
            ).length;
        }, 0);
        
        return { totalMessages, totalContacts, todayMessages };
    }
    
    getRecentContacts(numberSid) {
        const threads = this.messages[numberSid] || [];
        
        return threads
            .filter(thread => thread.messages.length > 0)
            .sort((a, b) => {
                const aLastMsg = a.messages[a.messages.length - 1];
                const bLastMsg = b.messages[b.messages.length - 1];
                return new Date(bLastMsg.time) - new Date(aLastMsg.time);
            })
            .slice(0, 3)
            .map(thread => {
                const lastMsg = thread.messages[thread.messages.length - 1];
                return {
                    name: thread.contact,
                    lastMessage: lastMsg.body.substring(0, 30) + (lastMsg.body.length > 30 ? '...' : ''),
                    time: this.formatTime(lastMsg.time)
                };
            });
    }
    
    selectNumber(numberSid) {
        this.selectedNumber = numberSid;
        this.selectedThread = null;
        
        const number = this.numbers.find(n => n.sid === numberSid);
        if (!number) return;
        
        // Hide profiles and show number view
        document.getElementById('phoneProfiles').style.display = 'none';
        document.getElementById('selectedNumberView').style.display = 'block';
        
        // Update number header
        document.getElementById('selectedNumberName').textContent = number.name;
        document.getElementById('selectedNumber').textContent = number.number;
        
        // Update stats
        const stats = this.getNumberStats(numberSid);
        document.getElementById('numberStats').innerHTML = `
            <div class="number-stat">
                <span class="stat-value">${stats.totalMessages}</span>
                <span class="stat-label">Total Messages</span>
            </div>
            <div class="number-stat">
                <span class="stat-value">${stats.totalContacts}</span>
                <span class="stat-label">Contacts</span>
            </div>
            <div class="number-stat">
                <span class="stat-value">${stats.todayMessages}</span>
                <span class="stat-label">Today</span>
            </div>
        `;
        
        // Render threads
        this.renderThreads(numberSid);
    }
    
    renderThreads(numberSid) {
        const threadsList = document.getElementById('threadsList');
        const threads = this.messages[numberSid] || [];
        
        threadsList.innerHTML = '';
        
        // Add "All Messages" option
        const allMessagesItem = document.createElement('div');
        allMessagesItem.className = 'thread-item' + (this.selectedThread === null ? ' active' : '');
        allMessagesItem.onclick = () => this.selectThread(null);
        allMessagesItem.innerHTML = `
            <div class="thread-contact-name">All Messages</div>
            <div class="thread-preview">View all conversations</div>
        `;
        threadsList.appendChild(allMessagesItem);
        
        // Add individual thread items
        threads.forEach(thread => {
            const threadItem = document.createElement('div');
            threadItem.className = 'thread-item' + (this.selectedThread === thread.number ? ' active' : '');
            threadItem.onclick = () => this.selectThread(thread.number);
            
            const lastMsg = thread.messages[thread.messages.length - 1];
            
            threadItem.innerHTML = `
                <div class="thread-contact-name">${thread.contact}</div>
                <div class="thread-contact-number">${thread.number}</div>
                <div class="thread-preview">${lastMsg.body.substring(0, 40)}${lastMsg.body.length > 40 ? '...' : ''}</div>
                <div class="thread-time">${this.formatTime(lastMsg.time)}</div>
            `;
            
            threadsList.appendChild(threadItem);
        });
        
        // Show messages for selected thread
        this.showThreadMessages();
    }
    
    selectThread(threadNumber) {
        this.selectedThread = threadNumber;
        
        // Update active thread styling
        document.querySelectorAll('.thread-item').forEach(item => {
            item.classList.remove('active');
        });
        
        if (threadNumber === null) {
            document.querySelector('.thread-item').classList.add('active');
            document.getElementById('threadContactName').textContent = 'All Messages';
            document.getElementById('threadContactNumber').textContent = '';
        } else {
            const threads = this.messages[this.selectedNumber] || [];
            const thread = threads.find(t => t.number === threadNumber);
            if (thread) {
                document.getElementById('threadContactName').textContent = thread.contact;
                document.getElementById('threadContactNumber').textContent = thread.number;
                
                // Highlight the selected thread
                const threadItems = document.querySelectorAll('.thread-item');
                threadItems.forEach(item => {
                    if (item.textContent.includes(threadNumber)) {
                        item.classList.add('active');
                    }
                });
            }
        }
        
        this.showThreadMessages();
    }
    
    showThreadMessages() {
        const messagesArea = document.getElementById('threadMessages');
        
        if (this.selectedThread === null) {
            // Show all messages
            this.showAllMessages(messagesArea);
        } else {
            // Show messages for specific thread
            this.showThreadSpecificMessages(messagesArea);
        }
        
        // Scroll to bottom
        messagesArea.scrollTop = messagesArea.scrollHeight;
    }
    
    showAllMessages(messagesArea) {
        const threads = this.messages[this.selectedNumber] || [];
        const allMessages = [];
        
        threads.forEach(thread => {
            thread.messages.forEach(msg => {
                allMessages.push({
                    ...msg,
                    contact: thread.contact,
                    threadNumber: thread.number
                });
            });
        });
        
        // Sort by time
        allMessages.sort((a, b) => new Date(a.time) - new Date(b.time));
        
        if (allMessages.length === 0) {
            messagesArea.innerHTML = `
                <div class="empty-messages">
                    <div class="empty-messages-icon">💬</div>
                    <p>No messages yet</p>
                </div>
            `;
            return;
        }
        
        messagesArea.innerHTML = allMessages.map(msg => {
            const time = new Date(msg.time).toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit' 
            });
            
            const contactInfo = msg.direction === 'received' ? 
                `<div style="font-size: 11px; font-weight: 600; margin-bottom: 4px; color: var(--gray-600);">${msg.contact} (${msg.threadNumber})</div>` : '';
            
            return `
                <div class="message ${msg.direction}">
                    <div class="message-bubble">
                        ${contactInfo}
                        ${msg.body}
                        <div class="message-time">${time}</div>
                    </div>
                </div>
            `;
        }).join('');
    }
    
    showThreadSpecificMessages(messagesArea) {
        const threads = this.messages[this.selectedNumber] || [];
        const thread = threads.find(t => t.number === this.selectedThread);
        
        if (!thread || thread.messages.length === 0) {
            messagesArea.innerHTML = `
                <div class="empty-messages">
                    <div class="empty-messages-icon">💬</div>
                    <p>No messages yet</p>
                </div>
            `;
            return;
        }
        
        messagesArea.innerHTML = thread.messages.map(msg => {
            const time = new Date(msg.time).toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit' 
            });
            
            return `
                <div class="message ${msg.direction}">
                    <div class="message-bubble">
                        ${msg.body}
                        <div class="message-time">${time}</div>
                    </div>
                </div>
            `;
        }).join('');
    }
    
    sendThreadMessage() {
        if (!this.selectedNumber) return;
        
        const messageInput = document.getElementById('threadMessageInput');
        const body = messageInput.value.trim();
        
        if (!body) {
            alert('Please enter a message');
            return;
        }
        
        // Determine recipient
        let recipient = this.selectedThread;
        
        if (recipient === null) {
            // For "All Messages", create a new thread or use first contact
            const threads = this.messages[this.selectedNumber] || [];
            if (threads.length === 0) {
                alert('No contacts available. Please select a specific contact first.');
                return;
            }
            recipient = threads[0].number;
        }
        
        // Add message to appropriate thread
        const threads = this.messages[this.selectedNumber] || [];
        let thread = threads.find(t => t.number === recipient);
        
        if (!thread) {
            // Create new thread if it doesn't exist
            thread = {
                contact: recipient,
                number: recipient,
                messages: []
            };
            threads.push(thread);
            this.messages[this.selectedNumber] = threads;
        }
        
        const message = {
            body: body,
            direction: 'sent',
            to: recipient,
            time: new Date()
        };
        
        thread.messages.push(message);
        
        // Update UI
        this.showThreadMessages();
        this.renderThreads(this.selectedNumber);
        
        // Clear input
        messageInput.value = '';
        messageInput.style.height = 'auto';
        
        // Simulate response
        setTimeout(() => {
            this.simulateResponse(this.selectedNumber, recipient);
        }, 1500);
    }
    
    simulateResponse(numberSid, from) {
        const responses = [
            'Thanks for your message!',
            'Got it, I\'ll get back to you soon.',
            'Message received!',
            'Thanks! Talk to you later.',
            'Received your message successfully.',
            'Perfect, thanks for letting me know!',
            'Understood, I\'ll take care of that.'
        ];
        
        const response = responses[Math.floor(Math.random() * responses.length)];
        
        const threads = this.messages[numberSid] || [];
        const thread = threads.find(t => t.number === from);
        
        if (thread) {
            const message = {
                body: response,
                direction: 'received',
                from: from,
                time: new Date()
            };
            
            thread.messages.push(message);
            
            // Update UI if this number is still selected
            if (this.selectedNumber === numberSid) {
                this.showThreadMessages();
                this.renderThreads(numberSid);
            }
        }
    }
    
    formatTime(date) {
        const now = new Date();
        const msgDate = new Date(date);
        const diffMs = now - msgDate;
        const diffMins = Math.floor(diffMs / 60000);
        
        if (diffMins < 1) return 'Just now';
        if (diffMins < 60) return `${diffMins}m ago`;
        
        const diffHours = Math.floor(diffMins / 60);
        if (diffHours < 24) return `${diffHours}h ago`;
        
        const diffDays = Math.floor(diffHours / 24);
        if (diffDays < 7) return `${diffDays}d ago`;
        
        return msgDate.toLocaleDateString();
    }
    
    showAlert(message, type) {
        const alert = document.getElementById('alert');
        alert.className = `alert alert-${type}`;
        alert.textContent = message;
        alert.style.display = 'block';
        
        setTimeout(() => {
            alert.style.display = 'none';
        }, 5000);
    }
}

// Initialize the application
const manager = new EnhancedTwilioSMSManager();

// Global functions
function loadNumbers() {
    manager.loadDemoNumbers();
    manager.showAlert('Numbers loaded successfully!', 'success');
}

function backToProfiles() {
    document.getElementById('phoneProfiles').style.display = 'grid';
    document.getElementById('selectedNumberView').style.display = 'none';
    manager.selectedNumber = null;
    manager.selectedThread = null;
}

function handleThreadKeyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        manager.sendThreadMessage();
    }
}

function sendThreadMessage() {
    manager.sendThreadMessage();
}