export class CircleContextMenu {
    constructor(options = {}) {
        this.items = options.itemsSource || [];
        this.menu = null;
        this.isOpen = false;
        this.radius = 150; // pixels
        this.init();
    }

    init() {
        this.createMenu();
        this.createCenterButton();
        this.attachEvents();
    }

    createMenu() {
        this.menu = document.createElement('div');
        this.menu.className = 'circle-menu';
        this.menu.style.width = `${this.radius * 2}px`;
        this.menu.style.height = `${this.radius * 2}px`;
        this.menu.style.display = 'none';
        
        // Create title pop element
        this.titlePop = document.createElement('div');
        this.titlePop.className = 'menu-title-pop';
        this.menu.appendChild(this.titlePop);
        
        const segmentAngle = 360 / this.items.length;
        
        this.items.forEach((item, index) => {
            const segment = this.createSegment(item, index, segmentAngle);
            this.menu.appendChild(segment);
        });

        document.body.appendChild(this.menu);
    }

    createCenterButton() {
        this.centerButton = document.createElement('div');
        this.centerButton.className = 'center-button';
        this.centerButton.innerHTML = '<span>×</span>'; // Default icon/text

        this.centerButton.onclick = (e) => {
            e.stopPropagation();
            console.log('Center button clicked');
            this.close();
        };

        this.menu.appendChild(this.centerButton);
    }

    createSegment(item, index, angleWidth) {
        const overlap = 0; // Removed overlap to prevent double-blurring artifacts
        const startAngle = index * angleWidth - 90;
        const endAngle = (index + 1) * angleWidth - 90;
        
        const segment = document.createElement('div');
        segment.className = 'menu-segment';
        segment.style.zIndex = index + 1;

        // Hover events for title pop
        segment.onmouseenter = () => {
            if (this.titlePop) {
                this.titlePop.textContent = item.key;
                this.titlePop.classList.add('visible');
                // Hide center icon when title is visible
                if (this.centerButton) {
                    this.centerButton.querySelector('span').style.opacity = '0';
                }
            }
        };

        segment.onmouseleave = () => {
            if (this.titlePop) {
                this.titlePop.classList.remove('visible');
                // Show center icon again
                if (this.centerButton) {
                    this.centerButton.querySelector('span').style.opacity = '1';
                }
            }
        };
        
        const innerDist = 26; // Increased segment depth by reducing inner radius
        const outerDist = 49.5; // Outer radius (%)
        
        // High-fidelity polygon: generate 1 point per 0.5 degrees
        const points = [];
        const step = 0.5;
        
        // Outer arc (Clockwise)
        for (let a = startAngle; a <= endAngle; a += step) {
            points.push(this.getPoint(a, outerDist));
        }
        points.push(this.getPoint(endAngle, outerDist));
        
        // Inner arc (Counter-Clockwise)
        for (let a = endAngle; a >= startAngle; a -= step) {
            points.push(this.getPoint(a, innerDist));
        }
        points.push(this.getPoint(startAngle, innerDist));

        const clipPathStr = `polygon(${points.map(p => `${p.x.toFixed(6)}% ${p.y.toFixed(6)}%`).join(', ')})`;
        
        // Apply clipping to the segment container
        segment.style.clipPath = clipPathStr;
        segment.style.webkitClipPath = clipPathStr;

        // Inner glass element to handle background and filters separately
        const glass = document.createElement('div');
        glass.className = 'segment-glass';
        segment.appendChild(glass);
        
        const label = document.createElement('span');
        label.className = 'segment-label';
        label.textContent = item.value;
        
        // Position label in the middle of the segment arc
        const midAngle = startAngle + (angleWidth / 2);
        const labelPos = this.getPoint(midAngle, 39);
        label.style.left = `${labelPos.x}%`;
        label.style.top = `${labelPos.y}%`;
        
        segment.appendChild(label);
        
        segment.onclick = (e) => {
            e.stopPropagation();
            console.log(`Clicked: ${item.key}`);
            this.close();
        };

        return segment;
    }

    getPoint(angle, distance = 50) {
        const rad = (angle * Math.PI) / 180;
        return {
            x: 50 + distance * Math.cos(rad),
            y: 50 + distance * Math.sin(rad)
        };
    }

    getPointPixels(angle, distance) {
        const rad = (angle * Math.PI) / 180;
        return {
            x: this.radius + distance * Math.cos(rad),
            y: this.radius + distance * Math.sin(rad)
        };
    }

    attachEvents() {
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            this.open(e.clientX, e.clientY);
        });

        document.addEventListener('click', () => {
            if (this.isOpen) this.close();
        });
    }

    open(x, y) {
        this.menu.style.left = `${x - this.radius}px`;
        this.menu.style.top = `${y - this.radius}px`;
        this.menu.style.display = 'block';
        // Force reflow
        this.menu.offsetHeight;
        this.menu.classList.add('active');
        this.isOpen = true;
    }

    close() {
        this.menu.classList.remove('active');
        setTimeout(() => {
            if (!this.menu.classList.contains('active')) {
                this.menu.style.display = 'none';
            }
        }, 300);
        this.isOpen = false;
    }
}
