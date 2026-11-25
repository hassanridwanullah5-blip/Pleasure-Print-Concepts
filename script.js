
// ========================================
// PLEASURE PRINT CONCEPTS
// REQUEST A QUOTE - WHATSAPP
// ========================================

const quoteForm = document.querySelector('#quote-form');

// Customer service WhatsApp number
const businessWhatsApp = '2348104066912';

if (quoteForm) {

    quoteForm.addEventListener('submit', function (event) {

        event.preventDefault();

        // Collect form data
        const formData = new FormData(quoteForm);

        const customerName = String(formData.get('customerName') || '').trim();
        const customerPhone = String(formData.get('customerPhone') || '').trim();
        const customerEmail = String(formData.get('customerEmail') || '').trim();

        const service = String(formData.get('service') || '').trim();

        const quantity =
            String(formData.get('quantity') || '').trim() || 'Not specified';

        const deadline =
            String(formData.get('deadline') || '').trim() || 'Not specified';

        const projectDetails =
            String(formData.get('projectDetails') || '').trim();


        // Validate required fields
        if (!customerName || !customerPhone || !service || !projectDetails) {

            alert('Please complete all required fields before requesting a quote.');

            return;
        }


        // Prepare WhatsApp message
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
Required Delivery Date: ${deadline}

*PROJECT DESCRIPTION*

${projectDetails}

Thank you.
`;


        // Create WhatsApp URL
        const whatsappURL =
            `https://wa.me/${businessWhatsApp}?text=${encodeURIComponent(message)}`;


        // Open WhatsApp in the current tab
        window.location.assign(whatsappURL);

    });

} else {

    console.warn('Quote form not found. Check the form ID.');

}
