document.querySelectorAll('.orbit').forEach((orbit, index) => {
    orbit.style.animationDuration = `${5 + index * 5}s`;
});

// Interactivity for planets
document.querySelectorAll('.planet').forEach((planet) => {
    planet.addEventListener('mouseenter', () => {
        planet.style.boxShadow = '0 0 20px rgba(255, 255, 255, 1)';
    });
    planet.addEventListener('mouseleave', () => {
        planet.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.8)';
    });
});
