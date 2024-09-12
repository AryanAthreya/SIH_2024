const widget = document.querySelector('.floating-widget');

widget.addEventListener('dragstart', function(e) {
    e.dataTransfer.setData('text/plain', null);
});

widget.addEventListener('drag', function(e) {
    if (e.clientX > 0 && e.clientY > 0) {
        widget.style.left = e.clientX + 'px';
        widget.style.top = e.clientY + 'px';
    }
});
function showRecommendation() {
    var crop = document.getElementById("cropSelect").value;
    var recommendationText = document.getElementById("recommendationText");
    var recommendationDiv = document.getElementById("recommendation");

    if (crop === "") {
        recommendationDiv.style.display = "none";
        return;
    }

    var recommendations = {
        "wheat": "Wheat grows best in areas with moderate temperatures and requires well-drained soil.",
        "rice": "Rice requires heavy water and warm temperatures. Ideal for areas with flooded fields.",
        "corn": "Corn thrives in fertile, well-drained soil and needs plenty of sunlight.",
        "soybeans": "Soybeans prefer warm weather and should be planted after the last frost.",
        "potatoes": "Potatoes grow well in cool climates and need loose, well-drained soil.",
        "carrots": "Carrots require deep, loose soil and consistent moisture for proper root development.",
        "cucumbers": "Cucumbers need plenty of warmth, sunlight, and space to spread. They also require regular watering.",
        "lettuce": "Lettuce grows best in cooler temperatures and can be grown in partial shade during hot weather.",
        "peas": "Peas prefer cool weather and need a trellis or support to climb. They require regular watering.",
        "beans": "Beans thrive in warm temperatures and need well-drained soil. They also benefit from support structures.",
        "sunflowers": "Sunflowers need full sunlight and well-drained soil. They grow best in warm conditions and are drought-tolerant."
        
    };

    recommendationText.textContent = recommendations[crop];
    recommendationDiv.style.display = "block";
}
// from html
        const video = document.getElementById('video');
        const canvas = document.getElementById('canvas');
        const captureButton = document.getElementById('captureButton');
        const capturedImage = document.getElementById('capturedImage');
        const downloadButton = document.getElementById('downloadButton');
        const uploadImage = document.getElementById('uploadImage');

        // Function to start the camera
        function startCamera() {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(stream => {
                    video.srcObject = stream;
                })
                .catch(err => {
                    console.error("Error accessing the camera: " + err);
                });
        }

        // Capture the image from the video feed
        captureButton.addEventListener('click', () => {
            const context = canvas.getContext('2d');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            // Convert canvas image to data URL and display it
            const imageDataUrl = canvas.toDataURL('image/png');
            capturedImage.src = imageDataUrl;
            capturedImage.style.display = 'block';

            // Show the download button and set the download link
            downloadButton.href = imageDataUrl;
            downloadButton.style.display = 'inline-block';
        });

        // Handle image upload
        uploadImage.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    capturedImage.src = e.target.result;
                    capturedImage.style.display = 'block';
                    downloadButton.href = e.target.result;
                    downloadButton.style.display = 'inline-block';
                };
                reader.readAsDataURL(file);
            }
        });

        // Start the camera when the page loads
        window.addEventListener('load', startCamera);

        // nav-bar
        // Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select all the navigation links
    const navLinks = document.querySelectorAll('.nav-link');
  
    // Attach event listener to each nav link
    navLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        // Prevent default link behavior
        event.preventDefault();
  
        // Get the target section ID from the href attribute
        const targetId = this.getAttribute('href');
        
        // Scroll to the target section
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth' // This makes the scroll smooth
        });
      });
    });
  });
  