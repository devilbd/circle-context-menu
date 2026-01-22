export const mainMenuItems = [
    { 
        key: 'home', 
        value: '🏠',
        items: [
            { key: 'dashboard', value: '📊' },
            { key: 'analytics', value: '📈' },
            { 
                key: 'reports', 
                value: '📝',
                items: [
                    { key: 'annual', value: '📅' },
                    { key: 'monthly', value: '📆' },
                    { 
                        key: 'weekly', 
                        value: '🗓️',
                        items: [
                            { key: 'draft', value: '📋' },
                            { key: 'final', value: '✅' }
                        ]
                    }
                ]
            }
        ]
    },
    { 
        key: 'edit', 
        value: '✏️',
        items: [
            { key: 'copy', value: '📋' },
            { key: 'paste', value: '📥' },
            { key: 'cut', value: '✂️' }
        ]
    },
    { key: 'delete', value: '🗑️' },
    { 
        key: 'share', 
        value: '🔗',
        items: [
            { key: 'email', value: '📧' },
            { key: 'twitter', value: '🐦' },
            { key: 'facebook', value: '👥' }
        ]
    },
    { key: 'settings', value: '⚙️' },
    { key: 'profile', value: '👤' },
];