// Funzionalità per lo scroll smooth ai collegamenti interni
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const offsetPosition = targetElement.offsetTop - 80; // Compensare l'altezza dell'header fisso
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Funzione per il modulo di contatto
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Quando il modulo viene inviato con successo, Formspree reindirizza
            // Possiamo mostrare un messaggio temporaneo di conferma
            console.log('Richiesta inviata! Riceverai una risposta via email o Telegram/Discord.');
        });
    }
    
    // Creazione dell'effetto luce del cursore
    const cursorLight = document.createElement('div');
    cursorLight.classList.add('cursor-light');
    document.body.appendChild(cursorLight);
    
    // Attiva l'effetto luce quando il mouse si muove
    document.body.classList.add('cursor-active');
    
    document.addEventListener('mousemove', (e) => {
        cursorLight.style.left = e.pageX + 'px';
        cursorLight.style.top = e.pageY + 'px';
    });
    
    // Nasconde l'effetto quando il mouse esce dal documento
    document.addEventListener('mouseleave', () => {
        cursorLight.style.display = 'none';
    });
    
    // Mostra l'effetto quando il mouse entra nel documento
    document.addEventListener('mouseenter', () => {
        if (document.body.classList.contains('cursor-active')) {
            cursorLight.style.display = 'block';
        }
    });
});