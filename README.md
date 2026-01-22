# Radial Context Menu

A premium, glassmorphism-style radial context menu for the web. Built with vanilla JavaScript and CSS, featuring smooth animations, nested sub-menus, and support for both Emojis and SVG icons.

![Demo Mockup](https://via.placeholder.com/800x400?text=Radial+Context+Menu+Demo)

## Features

- 🚀 **Vanilla JS**: Zero dependencies.
- 💎 **Glassmorphism**: Modern, frosted-glass aesthetic.
- 📁 **Nested Menus**: Support for infinite nesting depths.
- 🖼️ **Icon Support**: Use any Emoji or SVG file.
- 🎯 **Context Aware**: Restrict the menu to specific DOM elements via selectors.
- ⚡ **Performant**: Uses event delegation for efficient event handling.

---

## 🚀 Initialization

To use the menu, instantiate the `RadialContextMenu` class, set your configuration properties, and call `.init()`.

```javascript
import { RadialContextMenu } from "./src/radial-context-menu/radial-context-menu.js";

const menu = new RadialContextMenu();

// 1. Set the data source
menu.itemsSource = [
  { name: "Home", image: "🏠" },
  {
    name: "Settings",
    image: "⚙️",
    children: [
      { name: "Profile", image: "👤" },
      { name: "Security", image: "🔒" },
    ],
  },
];

// 2. Set the trigger selector (Optional - if null, triggers everywhere)
menu.selector = ".context-area";

// 3. Initialize
menu.init();
```

---

## 📡 Events

The menu provides several lifecycle and interaction hooks.

| Event          | Callback Signature | Description                                              |
| -------------- | ------------------ | -------------------------------------------------------- |
| `onInit`       | `(menu) => void`   | Fires after the menu is created and events are attached. |
| `onOpen`       | `(menu) => void`   | Fires when the menu is displayed.                        |
| `onClose`      | `(menu) => void`   | Fires after the menu closure animation finishes.         |
| `onHover`      | `(item) => void`   | Fires when a menu segment is hovered.                    |
| `onSelectItem` | `(item) => void`   | Fires when a leaf item (no children) is clicked.         |

**Example:**

```javascript
menu.onSelectItem = (item) => {
  console.log(`User clicked on: ${item.name}`);
};

menu.onOpen = () => {
  // Close other UI elements or pause activities
  console.log("Menu is now visible");
};
```

---

## 🎨 Icon Features

The widget supports two types of icons out of the box.

### 1. Emoji Icons

Simply pass a Unicode emoji string to the `image` property. This is the easiest way to get started without extra assets.

```javascript
{ name: 'Delete', image: '🗑️' }
```

### 2. SVG Icons

Pass a path to an SVG file. The component will automatically detect the `.svg` extension and render it as an image.

```javascript
{ name: 'Edit', image: 'src/assets/edit.svg' }
```

**Styling SVGs:**
The menu includes a default CSS filter (brightness/invert) to ensure SVG icons appear white against the dark glass background. You can customize this in `radial-context-menu.css`.

---

## 🛠️ Data Structure

Each item in the `itemsSource` array follows this structure:

```typescript
interface MenuItem {
  name: string; // Displayed in the center button on hover
  image: string; // Emoji string or path to .svg file
  children?: []; // Optional nested items
}
```

---
