export const mainMenuItems = [
    { 
        name: 'home', 
        image: '🏠',
        children: [
            { name: 'dashboard', image: '📊' },
            { name: 'analytics', image: '📈' },
            { 
                name: 'reports', 
                image: '📝',
                children: [
                    { name: 'annual', image: '📅' },
                    { name: 'monthly', image: '📆' },
                    { 
                        name: 'weekly', 
                        image: '🗓️',
                        children: [
                            { name: 'draft', image: '📋' },
                            { name: 'final', image: '✅' }
                        ]
                    }
                ]
            }
        ]
    },
    { 
        name: 'edit', 
        image: '✏️',
        children: [
            { name: 'copy', image: '📋' },
            { name: 'paste', image: '📥' },
            { name: 'cut', image: '✂️' }
        ]
    },
    { name: 'delete', image: '🗑️' },
    { 
        name: 'share', 
        image: '🔗',
        children: [
            { name: 'email', image: '📧' },
            { name: 'twitter', image: '🐦' },
            { name: 'facebook', image: '👥' }
        ]
    },
    { name: 'settings', image: '⚙️' },
    { name: 'profile', image: '👤' },
];