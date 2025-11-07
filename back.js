console.log("Back.js is loaded.");

const draggables = document.querySelectorAll(".drags");

let offsetX = 0;
let offsetY = 0;
let activeDraggable = null;

function hideBox() {
    const box = document.getElementById('header-content2');
    box.style.display = 'none';
  }

  function showBox() {
    const boxy = document.getElementById('header-content2');
    boxy.style.display = 'flex';
    const box = document.getElementById('placeholderImg');
    box.style.display = 'none';
    const bo = document.getElementById('vids');
    bo.style.display = 'flex';
  }

function hideVid() {
    const boxy = document.getElementById('header-content2');
    boxy.style.display = 'flex';
    const box = document.getElementById('placeholderImg');
    box.style.display = 'flex';
    const bo = document.getElementById('vids');
    bo.style.display = 'none';
  }





// --- NEW CODE: Handling Multiple .mini Buttons ---
const miniButtons = document.querySelectorAll(".mini");

miniButtons.forEach(button => {
    button.addEventListener("click", function() {
        alert("Dude don't try to minimize it");
    });
});

// --- NEW CODE: Handling Multiple .can Buttons ---
const canButtons = document.querySelectorAll(".can");

canButtons.forEach(button => {
    button.addEventListener("click", function() {
        alert("Dude don't try to get rid of it");
        
        // Optional: If you want the button to actually HIDE its parent window/item
        // button.closest('.drags').style.display = 'none';
    });
});
// --- Dragging Logic for Multiple Items ---

// 1. Select ALL elements with the class ".drags"
 // New variable to track the element currently being dragged

// 2. Attach the mousedown listener to EACH draggable item
draggables.forEach(draggable => {
    draggable.addEventListener("mousedown", function(e) {
        // Set the currently active item
        activeDraggable = draggable;

        // Calculate offset from element's corner to mouse position
        offsetX = draggable.offsetLeft - e.clientX;
        offsetY = draggable.offsetTop - e.clientY;
        
        // Optional: Bring the dragged item to the top layer
        // This requires CSS 'z-index' setup if you have overlapping elements.
        // activeDraggable.style.zIndex = "100";
    });
});


// 3. The mousemove listener now uses the 'activeDraggable'
document.addEventListener("mousemove", function(e) {
    // Check if an element is currently being dragged
    if (!activeDraggable) return;

    e.preventDefault(); // Prevent text selection while dragging

    // Calculate new position based on current mouse and original offset
    let mouseX = e.clientX + offsetX;
    let mouseY = e.clientY + offsetY;
    
    // Apply position to the active element
    activeDraggable.style.left = mouseX + "px";
    activeDraggable.style.top = mouseY + "px";
});


// 4. The mouseup listener resets the 'activeDraggable'
document.addEventListener("mouseup", function() {
    if (activeDraggable) {
        // Optional: Reset z-index after drop
        // activeDraggable.style.zIndex = ""; 
    }
    activeDraggable = null; // Stop dragging
});