window.onload = function() {
    var audio = document.getElementById("myAudio");
    audio.muted = false;  // Desactivar el silencio después de cargar
    audio.play();
};

const icons = ['🏗️', '📐', '🛠️', '🧱', '🚧', '🚦'];  // Íconos de ingeniería civil

document.body.addEventListener('click', function(event) {
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];  // Selecciona un ícono aleatorio
    const item = document.createElement('div');
    item.classList.add('item');
    item.innerHTML = randomIcon;
    item.style.left = `${event.clientX - 25}px`;  // Posiciona el ícono donde se hace clic
    item.style.animationDuration = `${Math.random() * 3 + 3}s`;  // Duración aleatoria de la animación
    document.body.appendChild(item);

    // Eliminar el ícono después de la animación
    setTimeout(() => {
        item.remove();
    }, 5000);  // Elimina después de 5 segundos
});
