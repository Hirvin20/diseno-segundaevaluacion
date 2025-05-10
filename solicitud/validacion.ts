document.addEventListener("DOMContentLoaded", () => {
    const solicitudForm = document.getElementById("solicitudForm") as HTMLFormElement;
    const paymentForm = document.getElementById("paymentForm") as HTMLFormElement;

    solicitudForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const nombre = (document.getElementById("nombre") as HTMLInputElement).value.trim();
        const cedula = (document.getElementById("cedula") as HTMLInputElement).value.trim();
        const diseno = (document.getElementById("diseno") as HTMLSelectElement).value;
        const mensaje = (document.getElementById("mensaje") as HTMLTextAreaElement).value.trim();

        if (!nombre || !cedula || !diseno || !mensaje) {
            alert("Por favor, complete todos los campos del formulario de solicitud.");
            return;
        }

        if (isNaN(Number(cedula))) {
            alert("La cédula debe ser un número válido.");
            return;
        }

        alert("Formulario de solicitud enviado correctamente.");
        solicitudForm.submit();
    });

    paymentForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const service = (paymentForm.querySelector("[name='service']") as HTMLSelectElement).value;
        const email = (paymentForm.querySelector("[name='email']") as HTMLInputElement).value.trim();
        const cardHolder = (paymentForm.querySelector("[name='card_holder']") as HTMLInputElement).value.trim();
        const cardNumber = (paymentForm.querySelector("[name='card_number']") as HTMLInputElement).value.trim();
        const expMonth = (paymentForm.querySelector("[name='exp_month']") as HTMLInputElement).value.trim();
        const expYear = (paymentForm.querySelector("[name='exp_year']") as HTMLInputElement).value.trim();
        const cvv = (paymentForm.querySelector("[name='cvv']") as HTMLInputElement).value.trim();
        const amount = (paymentForm.querySelector("[name='amount']") as HTMLInputElement).value.trim();
        const currency = (paymentForm.querySelector("[name='currency']") as HTMLSelectElement).value;

        if (!service || !email || !cardHolder || !cardNumber || !expMonth || !expYear || !cvv || !amount || !currency) {
            alert("Por favor, complete todos los campos del formulario de pago.");
            return;
        }

        if (!/^\d{16}$/.test(cardNumber)) {
            alert("El número de tarjeta debe tener 16 dígitos.");
            return;
        }

        if (Number(expMonth) < 1 || Number(expMonth) > 12) {
            alert("El mes de expiración debe estar entre 1 y 12.");
            return;
        }

        if (Number(expYear) < new Date().getFullYear()) {
            alert("El año de expiración no puede ser menor al año actual.");
            return;
        }

        if (!/^\d{3}$/.test(cvv)) {
            alert("El CVV debe tener 3 dígitos.");
            return;
        }

        if (isNaN(Number(amount)) || Number(amount) <= 0) {
            alert("El monto debe ser un número válido mayor a 0.");
            return;
        }

        alert("Formulario de pago enviado correctamente.");
        paymentForm.submit();
    });
});