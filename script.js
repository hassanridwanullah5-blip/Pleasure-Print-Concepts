const quoteForm = document.querySelector('#quote-form');

const businessWhatsApp = '2348104066912';

if (quoteForm) {
    quoteForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(quoteForm);

        const customerName = formData.get('customerName').trim();
        const customerPhone = formData.get('customerPhone').trim();
        const customerEmail = formData.get('customerEmail').trim();
        const service = formData.get('service');
        const quantity = formData.get('quantity') || 'Not specified';
        const deadline = formData.get('deadline') || 'Not specified';
        const projectDetails = formData.get('projectDetails').trim();

        const message = `
*NEW QUOTATION REQUEST*
*Pleasure Print Concepts*

*CUSTOMER INFORMATION*
Name: ${customerName}
Phone: ${customerPhone}
Email: ${customerEmail || 'Not provided'}

*PROJECT INFORMATION*
Service: ${service}
Quantity: ${quantity}
Delivery Date: ${deadline}

*PROJECT DESCRIPTION*
${projectDetails}
`;

        const whatsappURL = new URL(
            `https://wa.me/${businessWhatsApp}`
        );

        whatsappURL.searchParams.set('text', message);

        window.location.assign(whatsappURL.toString());
    });
}