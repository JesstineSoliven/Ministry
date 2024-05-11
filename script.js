let scale = 1;
let offsetX = 0;
let offsetY = 0;
let isDragging = false;
let startX, startY;

function zoomIn() {
    if (scale < 100) { // Limit maximum zoom level to 2x
        scale += 0.1;
        document.getElementById('map-image').style.transform = `scale(${scale}) translate(${offsetX}px, ${offsetY}px)`;
    }
}

function zoomOut() {
    if (scale > 1) { // Limit minimum zoom level to 1x
        scale -= 0.1;
        document.getElementById('map-image').style.transform = `scale(${scale}) translate(${offsetX}px, ${offsetY}px)`;
    }
}

document.getElementById('map-image').addEventListener('mousedown', startDrag);
document.getElementById('map-image').addEventListener('mouseup', endDrag);
document.getElementById('map-image').addEventListener('mouseleave', endDrag);
document.getElementById('map-image').addEventListener('mousemove', drag);

function startDrag(e) {
    isDragging = true;
    startX = e.clientX - offsetX;
    startY = e.clientY - offsetY;
}

function endDrag() {
    isDragging = false;
}

function drag(e) {
    if (isDragging) {
        e.preventDefault();
        const x = e.clientX - startX;
        const y = e.clientY - startY;
        offsetX = x;
        offsetY = y;
        document.getElementById('map-image').style.transform = `scale(${scale}) translate(${offsetX}px, ${offsetY}px)`;
    }
}

function redirectToGoogleForm() {
    // Replace 'YOUR_GOOGLE_FORM_LINK' with the actual link to your Google Form
    var googleFormLink = 'https://docs.google.com/forms/d/e/1FAIpQLSceFsgUZQut07ScGFip6Hkyfki9JUmg-wy0Vjo7AGUHHFeLNg/viewform';
    // Open the Google Form in a new tab/window
    window.open(googleFormLink, '_blank');
   // window.location.href = 'https://docs.google.com/forms/d/1yXUbVpKOhAe4HFiXb5VvDiYw9geAVY1YfInAVfsRKEA/edit';

  }

  // Function to change button color after saving the Google Form
  function changeButtonColor() {
    var button = document.getElementById("redirectButton2");
    button.style.backgroundColor = "blue"; // Change color to blue
  }
