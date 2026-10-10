/* =========================================================
   Brassquake - contacts.js
   FAQ and contact list on the Contact page
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const faq = [
    {
      question: "How can I book Brassquake for an event?",
      answer: "To book Brassquake, please fill out the contact form on this page or email us directly at brassquakegw@gmail.com. We'll get back to you as soon as possible to discuss your event details."
    },
    {
      question: "What types of performances do you offer?",
      answer: "We offer performances for various events including school functions, community gatherings, weddings, corporate events, and more. Our repertoire includes classical works, modern arrangements, film scores, and popular music."
    },
    {
      question: "What is your pricing like?",
      answer: "We offer a wide range of pricing, depending on the event and situation. Please do not hesitate to contact us, as we will be more than happy to chat with you about your event and how much it would cost."
    }
  ];

  const contacts = [
    {
      method: "brassquakegw@gmail.com",
      url: "mailto:brassquakegw@gmail.com",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`
    },
    {
      method: "YouTube - @brassquake",
      url: "https://www.youtube.com/@Brassquake",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>`
    },
    {
      method: "Instagram - @brassquake",
      url: "https://www.instagram.com/brassquake?igsh=OGw0cXkyOG1xamZ2",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`
    }
  ];

  const faqSection = document.querySelector("#faq-section");
  if (faqSection) {
    for (const item of faq) {
      faqSection.insertAdjacentHTML("beforeend", `
        <div class="faq-item">
          <div class="faq-question">${item.question}</div>
          <div class="faq-answer">${item.answer}</div>
        </div>
      `);
    }
  }

  const contactsList = document.querySelector("#contacts-list");
  if (contactsList) {
    for (const contact of contacts) {
      // Create a bulletproof HTML string for the text/link
      let textElement = "";
      
      if (contact.url.startsWith("mailto:")) {
        // Open email client in the same window
        textElement = `<a href="${contact.url}">${contact.method}</a>`;
      } else {
        // Open social links in a new tab
        textElement = `<a href="${contact.url}" target="_blank" rel="noopener noreferrer" title="${contact.method}">${contact.method}</a>`;
      }

      // Insert cleanly without complex nested logic
      contactsList.insertAdjacentHTML("beforeend", `
        <li>
          <div class="svg-icon">${contact.svg}</div>
          ${textElement}
        </li>
      `);
    }
  }
});