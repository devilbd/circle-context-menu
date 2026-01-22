import { CircleContextMenu } from "./components/circle-context-menu/circle-context-menu.js";

export class Boot {
    constructor() {
        this.menu = null;
    }

    start() {
        const items = [
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

        this.menu = new CircleContextMenu();
        
        this.menu.itemsSource = items;
        this.menu.onInit = (menu) => console.log("Menu initialized", menu);
        this.menu.onOpen = (menu) => console.log("Menu opened", menu);
        this.menu.onClose = (menu) => console.log("Menu closed", menu);
        this.menu.onSelectItem = (item) => console.log("Item selected:", item.key);
        this.menu.onHover = (item) => console.log("Hovering over:", item.key);
        
        this.menu.init();

        console.log("Boot sequence completed. Right-click to see the menu.");
    }
}

// Initialize boot
new Boot().start();
