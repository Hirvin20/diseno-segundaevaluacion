document.addEventListener("DOMContentLoaded", () => {
    const solicitarDisenoBtn = document.getElementById("solicitarDiseno");

    if (solicitarDisenoBtn) {
        solicitarDisenoBtn.addEventListener("click", (event) => {
            event.preventDefault();
            const confirmation = confirm("¿Estás seguro de que deseas solicitar un diseño?");
            if (confirmation) {
                window.location.href = (solicitarDisenoBtn as HTMLAnchorElement).href;
            }
        });
    } else {
        console.error("El botón 'Solicitar Diseño' no se encontró en el DOM.");
    }

    const emailElement = document.querySelector("footer p:nth-child(1)");
    const phoneElement = document.querySelector("footer p:nth-child(2)");

    if (emailElement && !validateEmail(emailElement.textContent || "")) {
        console.error("El correo electrónico proporcionado no es válido.");
    }

    if (phoneElement && !validatePhone(phoneElement.textContent || "")) {
        console.error("El número de teléfono proporcionado no es válido.");
    }
});

function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}

function validatePhone(phone: string): boolean {
    const phoneRegex = /^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{3,4}[-.\s]?\d{4}$/;
    return phoneRegex.test(phone.trim());
}