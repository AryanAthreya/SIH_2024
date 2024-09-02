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