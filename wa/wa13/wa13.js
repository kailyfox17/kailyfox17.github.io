
var volume = 50; // Initial volume value

document.getElementById('volumeContainer').addEventListener('click', function(event) {
var volumeBar = document.getElementById('volumeBar');
var volumeStatus = document.getElementById('volumeStatus');
var volumeContainerRect = this.getBoundingClientRect();
var volumeBarWidth = event.clientX - volumeContainerRect.left;
var maxVolumeBarWidth = this.clientWidth;

// Update volume based on volume bar width and update volume status
volume = Math.ceil((volumeBarWidth / maxVolumeBarWidth) * 100);
volumeBar.style.width = volumeBarWidth + 'px';
volumeStatus.textContent = 'Volume: ' + volume;
});

document.getElementById('volumeContainer').addEventListener('mousemove', function(event) {
var volumeBar = document.getElementById('volumeBar');
var volumeContainerRect = this.getBoundingClientRect();
var volumeBarWidth = event.clientX - volumeContainerRect.left;

// Limit volume bar width within volume container bounds
if (volumeBarWidth < 0) {
    volumeBarWidth = 0;
} else if (volumeBarWidth > this.clientWidth) {
    volumeBarWidth = this.clientWidth;
}
volumeBar.style.width = volumeBarWidth + 'px';
});

document.getElementById('volumeContainer').addEventListener('mouseout', function() {
var volumeBar = document.getElementById('volumeBar');
var volumeStatus = document.getElementById('volumeStatus');

// Reset volume bar width and volume status to initial value
volumeBar.style.width = (volume / 100) * this.clientWidth + 'px';
volumeStatus.textContent = 'Volume: ' + volume;
});