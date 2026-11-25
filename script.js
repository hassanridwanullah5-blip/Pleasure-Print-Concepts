
// ===============================
// REQUEST A QUOTE - WHATSAPP
// ===============================

const quoteForm = document.querySelector('#quote-form');

// Replace this with your actual business WhatsApp number.
// Use international format without +, spaces or hyphens.
const businessWhatsApp = 'https://wa.me/2348104066912?utm_source=chatgpt.com';

quoteForm.addEventListener('submit', function (event) {

    event.preventDefault();

    // Collect customer information
    const formData = new FormData(quoteForm);

    const customerName = formData.get('customerName').trim();
    const customerPhone = formData.get('customerPhone').trim();
    const customerEmail = formData.get('customerEmail').trim();
    const service = formData.get('service');
    const quantity = formData.get('quantity') || 'Not specified';
    const deadline = formData.get('deadline') || 'Not specified';
    const projectDetails = formData.get('projectDetails').trim();

    // Prepare WhatsApp message
    const message = `
*NEW QUOTATION REQUEST*
*Pleasure Print Concepts*

*Customer Information*
Name: ${customerName}
Phone: ${customerPhone}
Email: ${customerEmail || 'Not provided'}

*Project Information*
Service: ${service}
Quantity: ${quantity}
Required Delivery Date: ${deadline}

*Project Description*
${projectDetails}

Thank you!
`;

    // Open WhatsApp with the prepared message
    const whatsappURL =
        `https://wa.me/${businessWhatsApp}?text=${encodeURIComponent(message)}`;

    window.location.href = whatsappURL;

});
