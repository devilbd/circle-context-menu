import { RadialContextMenu } from "./radial-context-menu/radial-context-menu.js";
import { mainMenuItems } from "./main-menu-data.js";
import { svgMenuItems } from "./second-menu-data.js";

export class App {
    mainMenu;
    secondaryMenu;

    start() {
        this.setupMainVariant();
        this.setupSecondaryMenu();
    }

    setupMainVariant() {
        this.mainMenu = new RadialContextMenu();        
        this.mainMenu.itemsSource = mainMenuItems;
        this.mainMenu.selector = '.content'; // Only on header for main variant
        this.mainMenu.onSelectItem = (item) => console.log("Main Menu Selected:", item.name);
        this.mainMenu.onOpen = () => {
            this.secondaryMenu.close();
        }
        this.mainMenu.init();
    }

    setupSecondaryMenu() {
        this.secondaryMenu = new RadialContextMenu();
        this.secondaryMenu.itemsSource = svgMenuItems;
        this.secondaryMenu.selector = '.content-svg'; // Only on paragraph for SVG variant
        this.secondaryMenu.onSelectItem = (item) => console.log("Secondary Menu Selected:", item.name);
        this.secondaryMenu.onHover = (item) => console.log("Secondary Menu Hover:", item.name);
        this.secondaryMenu.onOpen = () => {
            this.mainMenu.close();
        }
        this.secondaryMenu.init();
        
        console.log("App started. Right-click 'header' for Emoji menu, and 'paragraph' for SVG menu.");
    }
}

(() => {
    const app = new App();
    app.start();
})();
