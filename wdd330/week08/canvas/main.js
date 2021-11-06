'use strict';

window.addEventListener("load", (event) => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    // Draw the ellipse
    ctx.beginPath();
    let gradient = ctx.createLinearGradient(0, 50, 100, 200);   // 45-degree gradient
    gradient.addColorStop(0, "darkorange"); 
    gradient.addColorStop(1, "white"); 
    ctx.ellipse(100, 100, 50, 75, Math.PI / 2, 0, 2 * Math.PI);
    ctx.fillStyle = gradient;
    ctx.fill();
    //ctx.stroke();
    
    // Draw the ellipse's line of reflection
    ctx.beginPath();
    ctx.setLineDash([5, 5]);
    ctx.moveTo(0, 100);
    ctx.lineTo(200, 100);
    ctx.strokeStyle = "red";
    ctx.stroke();

    // Draw a circle as the special case of an ellipse
    ctx.beginPath();
    ctx.setLineDash([]);
    gradient = ctx.createLinearGradient(0, 0, 0, 200);  // Vertical gradient
    gradient.addColorStop(0, "darkgreen"); 
    gradient.addColorStop(1, "white"); 
    ctx.ellipse(300, 100, 60, 60, 0, 0, 2 * Math.PI);   // Equal axes makes a circle
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.strokeStyle = "darkblue";
    ctx.lineWidth = 2;
    ctx.stroke();
});
