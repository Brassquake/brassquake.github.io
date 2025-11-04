document.addEventListener("DOMContentLoaded", () => {
  // FAQ data
  let faq = [
    {
      question: "How can I book Brassquake for an event?",
      answer: "To book Brassquake, please fill out the contact form on this page or email us directly at brassquakegw@gmail.com. We'll get back to you as soon as possible to discuss your event details."
    },
    {
      question: "What types of performances do you offer?",
      answer: "We offer performances for various events including school functions, community gatherings, weddings, corporate events, and more. Our repertoire includes classical works, modern arrangements, film scores, and popular music."
    },
    {
      question: "Do you perform for private events?",
      answer: "Yes, we perform for a variety of events including private parties, weddings, corporate functions, and community celebrations. Contact us to discuss your specific needs."
    }
  ];

  // Populate FAQ
  for (let i = 0; i < faq.length; i++) {
    const item = faq[i];
    document.querySelector('#faq-section').insertAdjacentHTML('beforeend', `
      <div class="faq-item">
        <div class="faq-question">${item.question}</div>
        <div class="faq-answer">${item.answer}</div>
      </div>
    `);
  }

  // Contact data
  let contacts = [
    {
      method: "Email: brassquakegw@gmail.com",
      url: "mailto:brassquakegw@gmail.com",
      icon: "images/Email.png"
    },
    {
      method: "YouTube - @brassquake",
      url: "https://www.youtube.com/@Brassquake",
      icon: "images/youtube.png"
    },
    {
      method: "Instagram - @brassquake",
      url: "https://www.instagram.com/brassquake?igsh=OGw0cXkyOG1xamZ2",
      icon: "images/instagram.png"
    },
  ];

  // Populate contacts
  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];
    const isEmail = contact.url.startsWith("mailto:");

    document.querySelector('#contacts-list').insertAdjacentHTML('beforeend', `
      <li>
        <img src="${contact.icon}" alt="${contact.method}">
        ${isEmail
          ? `<span>${contact.method}</span>`
          : `<a href="${contact.url}" target="_blank" title="${contact.method}">${contact.method}</a>`
        }
      </li>
    `);
  }
});
