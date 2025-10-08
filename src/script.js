// This file contains the JavaScript code for the application.

// Import the image list
import imageList from './image-list.json';

// Transform image names to JS dates and find nearest to today
function parseImageDate(imageName) {
    // Extract date part before the extension (remove .jpeg)
    const datePart = imageName.replace('.jpeg', '');

    // Parse YYYYMMDD HHMMss format
    const year = parseInt(datePart.substring(0, 4));
    const month = parseInt(datePart.substring(4, 6)) - 1; // Month is 0-indexed
    const day = parseInt(datePart.substring(6, 8));

    return new Date(year, month, day);
}

// Get current date (day and month only)
const now = new Date();
const currentMonth = now.getMonth();
const currentDay = now.getDate();

// Find image with nearest day/month to current day/month
let nearestImage = null;
let smallestDateDiff = Infinity;

imageList.forEach((imageName) => {
    const imageDate = parseImageDate(imageName);
    const imageMonth = imageDate.getMonth();
    const imageDay = imageDate.getDate();

    // Calculate difference in days considering only day and month
    // Convert both dates to "day of year" format for comparison
    const currentDayOfYear = currentMonth * 31 + currentDay;
    const imageDayOfYear = imageMonth * 31 + imageDay;

    const dateDiff = Math.abs(currentDayOfYear - imageDayOfYear);

    if (dateDiff < smallestDateDiff) {
        smallestDateDiff = dateDiff;
        nearestImage = {
            name: imageName,
            date: imageDate,
            dayMonth: `${imageDay}/${imageMonth + 1}` // Display as DD/MM
        };
    }
});

console.log('Nearest image to current date (day/month):', nearestImage);
console.log('Current date (day/month):', `${currentDay}/${currentMonth + 1}`);

// Render only the image
if (nearestImage) {
    const app = document.getElementById('app');
    app.innerHTML = `<img src="./${nearestImage.name}" alt="Tabla de alimentación" style="max-width: 100%; height: auto;">`;
}