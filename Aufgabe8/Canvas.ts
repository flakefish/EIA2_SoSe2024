namespace Canvas {
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        canvas.width = window.innerWidth - 30;
        canvas.height = window.innerHeight - 30;
        drawTriangles({x: canvas.width, y: canvas.height});
        drawCircles({x: canvas.width, y: canvas.height});
    }

    // Erstellung der Dreiecke mit zufälligen Positionen und Farben
    function drawTriangles(_position: Vector): void {
        console.log("Triangles", _position);
        let nTriangles: number = 5000; 
        crc2.save();

        for (let drawn: number = 0; drawn < nTriangles; drawn++) {
            crc2.save();
            let x: number = Math.random() * _position.x; 
            let y: number = Math.random() * _position.y; 

            // Erstellung eines linearen Farbverlaufs für jedes Dreieck
            let gradient: CanvasGradient = crc2.createLinearGradient(x, y, x + 30, y + 30);
            let z: number = Math.floor(Math.random() * 4);

            // Auswahl der Farben
            switch (z) {
                case 0:
                    gradient.addColorStop(0, "DarkOrchid");
                    gradient.addColorStop(1, "DarkRed");
                    break;
                case 1:
                    gradient.addColorStop(0, "ForestGreen");
                    gradient.addColorStop(1, "aquamarine");
                    break;
                case 2:
                    gradient.addColorStop(0, "lightskyblue");
                    gradient.addColorStop(1, "mediumblue");
                    break;
                default:
                    gradient.addColorStop(0, "lightslategrey");
                    gradient.addColorStop(1, "gold");
            }
            crc2.fillStyle = gradient;
            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.lineTo(x + 20, y + 40);
            crc2.lineTo(x - 20, y + 60);
            crc2.closePath();
            crc2.fill();
            crc2.restore(); 
        }
        crc2.restore(); 
    }

    // Funktion zum Zeichnen von Kreisen mit zufälligen Positionen und Farben
    function drawCircles(_position: Vector): void {
        console.log("Circles", _position);
        let nCircles: number = 500;
        crc2.save();

        for (let drawn: number = 0; drawn < nCircles; drawn++) {
            crc2.save();
            let x: number = Math.random() * _position.x;
            let y: number = Math.random() * _position.y;
            let radius: number = Math.random() * 50; 

            // Erstellung eines radialen Farbverlaufs für jeden Kreis
            let gradient: CanvasGradient = crc2.createRadialGradient(x, y, 0, x, y, radius);
            let z: number = Math.floor(Math.random() * 4);

            // Auswahl der Farben
            switch (z) {
                case 0:
                    gradient.addColorStop(0, "DarkOrchid");
                    gradient.addColorStop(1, "DarkRed");
                    break;
                case 1:
                    gradient.addColorStop(0, "ForestGreen");
                    gradient.addColorStop(1, "aquamarine");
                    break;
                case 2:
                    gradient.addColorStop(0, "lightskyblue");
                    gradient.addColorStop(1, "mediumblue");
                    break;
                default:
                    gradient.addColorStop(0, "lightslategrey");
                    gradient.addColorStop(1, "gold");
            }
            crc2.fillStyle = gradient;
            crc2.beginPath();
            crc2.arc(x, y, radius, 0, 2 * Math.PI);
            crc2.closePath(); 
            crc2.fill();
            crc2.restore();
        }
        crc2.restore();
    }
}