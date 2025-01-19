document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("backgroundCanvas");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawBackground();
    }

    function drawBackground() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        const gridSize = 184; // Width of each cell
        const gridHeight = 185; // Height of each cell
        const smallGridHeight = 120; // Height of the first grid
        const gridColor = "rgb(51, 51, 54)";
        const backgroundColor = "bg-background";
    
        // Draw the background color
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Calculate the horizontal offset to center the grid
        const offsetX = (canvas.width % gridSize) / 2;
    
        // Create a pattern canvas to draw the grid
        const patternCanvas = document.createElement("canvas");
        const pCtx = patternCanvas.getContext("2d");
    
        patternCanvas.width = gridSize;
        patternCanvas.height = gridHeight;
    
        pCtx.strokeStyle = gridColor;
        pCtx.lineWidth = 1;
    
        // Draw the vertical line in the pattern
        pCtx.beginPath();
        pCtx.moveTo(gridSize - 0.5, 0);
        pCtx.lineTo(gridSize - 0.5, gridHeight);
        pCtx.stroke();
    
        // Draw the horizontal line in the pattern
        pCtx.beginPath();
        pCtx.moveTo(0, gridHeight - 0.5);
        pCtx.lineTo(gridSize, gridHeight - 0.5);
        pCtx.stroke();
    
        // Create the pattern with the canvas
        const pattern = ctx.createPattern(patternCanvas, "repeat");
        ctx.fillStyle = pattern;
        
        // Draw the grid
        ctx.save();
        ctx.translate(offsetX, smallGridHeight); // Desplazar para mantener alineación correcta
        ctx.fillRect(-offsetX, -smallGridHeight, canvas.width + offsetX, canvas.height + smallGridHeight);
        ctx.restore();
    
        // Add a gradient to the top of the canvas
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        
        gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
        gradient.addColorStop(0.5, "rgba(0, 0, 0, 0.4)");
        gradient.addColorStop(0.9, "rgba(0, 0, 0, 0.8)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 1)");
    
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Add a gradient light to the top of the canvas
        const lightGradient = ctx.createRadialGradient(
            canvas.width / 2,
            0,
            0,
            canvas.width / 2,
            200,
            1200
        );

        lightGradient.addColorStop(0, "rgba(255, 255, 255, 0.12)");
        lightGradient.addColorStop(0.3, "rgba(255, 255, 255, 0.08)");
        lightGradient.addColorStop(0.6, "rgba(0, 0, 0, 0.05)");
        lightGradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = lightGradient; // Set the gradient as the fill style
        ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill the canvas with the gradient
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
});