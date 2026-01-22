import { RadialContextMenu } from "./radial-context-menu/radial-context-menu.js";
import { mainMenuItems } from "./main-menu-data.js";

export class App {
    mainMenu;

    start() {
        this.setupContextMenu();
    }

    setupContextMenu() {
        this.mainMenu = new RadialContextMenu();        
        this.mainMenu.itemsSource = mainMenuItems;
        this.mainMenu.selector = '.content';
        this.mainMenu.onInit = (menu) => console.log("Menu initialized", menu);
        this.mainMenu.onOpen = (menu) => console.log("Menu opened", menu);
        this.mainMenu.onClose = (menu) => console.log("Menu closed", menu);
        this.mainMenu.onSelectItem = (item) => console.log("Item selected:", item.key);
        this.mainMenu.onHover = (item) => console.log("Hovering over:", item.key);        
        this.mainMenu.init();
        console.log("Boot sequence completed. Right-click to see the menu.");
    }
}

(() => {
    const app = new App();
    app.start();
})();
