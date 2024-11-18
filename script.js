function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('showing');
}


function liveSearch() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const sections = document.querySelectorAll('.service-card, .destination-card');

    // Loop through all the service and destination cards and check if the content matches the search query
    sections.forEach(section => {
        const text = section.innerText.toLowerCase();
        section.style.display = text.includes(query) ? "block" : "none"; // Show/hide content
    });
}



let currentTestimonial = 0;

function changeTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');

    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        dots[i].classList.remove('active');
    });

    currentTestimonial = index;
    testimonials[currentTestimonial].classList.add('active');
    dots[currentTestimonial].classList.add('active');
}

// Automatically change testimonials every 5 seconds
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % document.querySelectorAll('.testimonial').length;
    changeTestimonial(currentTestimonial);
}, 5000); // 5000 milliseconds = 5 seconds

document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', () => changeTestimonial(index));
});


const chatButton = document.getElementById('chatButton');
const chatWindow = document.getElementById('chatWindow');
const closeChat = document.getElementById('closeChat');
const userInput = document.getElementById('userInput');
const chatContent = document.getElementById('chatContent');
const sendMessageBtn = document.getElementById('sendMessage');

if (chatButton && chatWindow && closeChat && userInput && chatContent && sendMessageBtn) {
    chatButton.addEventListener('click', function() {
        chatWindow.style.display = 'flex'; 
    });

    closeChat.addEventListener('click', function() {
        chatWindow.style.display = 'none'; 
    });

    sendMessageBtn.addEventListener('click', sendMessage);

    userInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
}

function sendMessage() {
    const userMessage = userInput.value.trim();

    if (userMessage) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', 'user');
        messageElement.textContent = userMessage;
        chatContent.appendChild(messageElement);

        chatContent.scrollTop = chatContent.scrollHeight;

        userInput.value = '';

        setTimeout(function() {
            const botResponse = getBotResponse(userMessage);
            const botMessage = document.createElement('div');
            botMessage.classList.add('chat-message', 'bot');
            botMessage.textContent = botResponse;
            chatContent.appendChild(botMessage);

            // Scroll to the bottom
            chatContent.scrollTop = chatContent.scrollHeight;
        }, 1000); // Bot replies after 1 second
    }
}

function getBotResponse(message) {
    const lowercaseMessage = message.toLowerCase();

    // Basic keyword-based responses
    if (lowercaseMessage.includes('hello') || lowercaseMessage.includes('hi')) {
        return "Hello! How can I assist you today?";
    } else if (lowercaseMessage.includes('booking') || lowercaseMessage.includes('reserve')) {
        return "You can book a trip with us by visiting the booking section on our website!"; 
    }
     else if (lowercaseMessage.includes('price') || lowercaseMessage.includes('cost')) {
        return "Our pricing varies depending on the destination. Please check the 'Packages' section for detailed information.";
    } else if (lowercaseMessage.includes('contact') || lowercaseMessage.includes('support')) {
        return "You can reach out to our support team via the 'Contact Us' page. You can also contact us at (+91) 79813 67125 or (+91) 93923 26481, or email us at support@roamaura.com for assistanceWe're here to help!";
    } else if (lowercaseMessage.includes('thank you') || lowercaseMessage.includes('thanks')) {
        return "You're welcome! Let me know if there's anything else I can help with.";
    } else if (lowercaseMessage.includes('bye') || lowercaseMessage.includes('goodbye')) {
        return "Goodbye! Have a great day!";
    } 

    // Expanded Responses: Destinations
    else if (lowercaseMessage.includes('destination') || lowercaseMessage.includes('locations')) {
        return "We offer amazing destinations worldwide, from tropical beaches to mountain escapes. Check our 'Destinations' page for more information!";
    } else if (lowercaseMessage.includes('popular destinations')) {
        return "Our most popular destinations include Bali, Paris, and the Maldives. Visit our 'Destinations' section for more details!";
    }

    // Transportation & Flights
    else if (lowercaseMessage.includes('flight') || lowercaseMessage.includes('transport')) {
        return "We partner with major airlines for comfortable and affordable flights. You can check flight options while booking your trip.";
    } else if (lowercaseMessage.includes('airport transfer')) {
        return "Yes, we offer airport transfer services as part of our packages. Make sure to check the package details when booking.";

    // Activities & Tours
    } else if (lowercaseMessage.includes('activity') || lowercaseMessage.includes('tour')) {
        return "Our tours include a wide variety of activities such as hiking, city tours, and beach sports. For a full list, check the 'Activities' section!";
    } else if (lowercaseMessage.includes('adventure') || lowercaseMessage.includes('outdoor')) {
        return "We have exciting outdoor adventures, including zip-lining, scuba diving, and trekking! Explore our 'Activities' section for more.";
    
    // Reviews & Testimonials
    } else if (lowercaseMessage.includes('review') || lowercaseMessage.includes('testimonials')) {
        return "We have wonderful reviews from our clients! You can read them in the 'Reviews' section on our website.";
    
    // Special Offers
    } else if (lowercaseMessage.includes('discount') || lowercaseMessage.includes('offer')) {
        return "We frequently offer discounts on our packages! Check the 'Special Offers' section to see the latest deals.";
    
    // Accommodations & Hotels
    } else if (lowercaseMessage.includes('hotel') || lowercaseMessage.includes('accommodation')) {
        return "We provide luxurious and comfortable accommodations with our travel packages. Check the 'Accommodations' section for details.";
    
    // Payments & Refunds
    } else if (lowercaseMessage.includes('payment') || lowercaseMessage.includes('refund')) {
        return "We accept various payment methods including credit cards and digital wallets. Our refund policy can be found on the 'FAQs' page.";
    
    // Safety & Travel Insurance
    } else if (lowercaseMessage.includes('safety') || lowercaseMessage.includes('insurance')) {
        return "Your safety is our priority! We offer travel insurance as part of our packages. Details can be found on our website.";
    
    // General Information
    } else if (lowercaseMessage.includes('time') || lowercaseMessage.includes('hours')) {
        return "Our customer service is available 24/7 to assist you with your travel needs!";
    }
    // Extended Responses with Variations
    else if (lowercaseMessage.includes('weather')) {
        return "It's always a great idea to check the weather before your trip. You can find current weather updates on our website.";
    } else if (lowercaseMessage.includes('itinerary')) {
        return "You can customize your itinerary to include all your favorite spots! Please visit our 'Itinerary' section for more information.";
    } else if (lowercaseMessage.includes('food') || lowercaseMessage.includes('cuisine')) {
        return "We offer culinary tours that include local food experiences! Check our 'Food Tours' section for details.";
    } else if (lowercaseMessage.includes('guide') || lowercaseMessage.includes('guidebook')) {
        return "Our travel guides are knowledgeable and friendly, ready to help you explore! You can find more about them in our 'Guided Tours' section.";
    } else if (lowercaseMessage.includes('family') || lowercaseMessage.includes('kids')) {
        return "We offer family-friendly packages with activities for all ages. Check our 'Family Packages' section for more!";
    } else if (lowercaseMessage.includes('solo travel') || lowercaseMessage.includes('backpacking')) {
        return "We have great options for solo travelers, including backpacking tours and group travel. Visit our 'Solo Travel' section!";
    } else if (lowercaseMessage.includes('special requests') || lowercaseMessage.includes('customization')) {
        return "We accommodate special requests to make your trip unique. Please share your needs in the 'Customization' section!";
    } else if (lowercaseMessage.includes('emergency') || lowercaseMessage.includes('urgent')) {
        return "In case of an emergency, please contact local authorities. For immediate assistance, reach out to our support team! You can also contact us at (+91) 79813 67125 or (+91) 93923 26481, or email us at support@roamaura.com for assistance.";
    } 

    // Travel-specific keywords and responses
    else if (lowercaseMessage.includes('travel insurance')) {
        return "Travel insurance is essential for safeguarding your trip. It covers unexpected events such as trip cancellations and medical emergencies.";
    } else if (lowercaseMessage.includes('hawaii travel restrictions')) {
        return "Before traveling to Hawaii, please check the latest travel restrictions on the state's official website for updated information.";
    } else if (lowercaseMessage.includes('travel state gov')) {
        return "You can find travel advisories and restrictions on your state government's website. It's a reliable source for the latest updates.";
    } else if (lowercaseMessage.includes('new york travel restrictions')) {
        return "Check the New York state government website for the latest travel restrictions and health guidelines.";
    } else if (lowercaseMessage.includes('travel agents near me')) {
        return "You can search for travel agents near you using online directories or Google Maps for convenient options.";
    } else if (lowercaseMessage.includes('travel resources')) {
        return "Explore our 'Travel Resources' section for valuable information on visas, packing lists, and travel tips.";
    } else if (lowercaseMessage.includes('trip cancellation')) {
        return "Trip cancellation insurance is highly recommended. It can provide peace of mind in case you need to cancel your travel plans unexpectedly.";
    } else if (lowercaseMessage.includes('travel guidelines')) {
        return "For travel guidelines, refer to the World Health Organization (WHO) and your country's health department for the latest safety recommendations.";
    }
    else if (lowercaseMessage.includes('booking') || lowercaseMessage.includes('reserve')) {
    return "You can book a trip with us by visiting the booking section on our website!";
    } else if (lowercaseMessage.includes('price') || lowercaseMessage.includes('cost')) {
        return "Our pricing varies depending on the destination. Please check the 'Packages' section for detailed information.";
    } else if (lowercaseMessage.includes('contact') || lowercaseMessage.includes('support')) {
        return "You can reach out to our support team via the 'Contact Us' page. You can also contact us at (+91) 79813 67125 or (+91) 93923 26481, or email us at support@roamaura.com for assistanceWe're here to help!";
    } else if (lowercaseMessage.includes('thank you') || lowercaseMessage.includes('thanks')) {
        return "You're welcome! Let me know if there's anything else I can help with.";
    } else if (lowercaseMessage.includes('bye') || lowercaseMessage.includes('goodbye')) {
        return "Goodbye! Have a great day!";
    } 

    // Expanded Responses: Destinations
    else if (lowercaseMessage.includes('destination') || lowercaseMessage.includes('locations')) {
        return "We offer amazing destinations worldwide, from tropical beaches to mountain escapes. Check our 'Destinations' page for more information!";
    } else if (lowercaseMessage.includes('popular destinations')) {
        return "Our most popular destinations include Bali, Paris, and the Maldives. Visit our 'Destinations' section for more details!";
    }

    // Transportation & Flights
    else if (lowercaseMessage.includes('flight') || lowercaseMessage.includes('transport')) {
        return "We partner with major airlines for comfortable and affordable flights. You can check flight options while booking your trip.";
    } else if (lowercaseMessage.includes('airport transfer')) {
        return "Yes, we offer airport transfer services as part of our packages. Make sure to check the package details when booking.";
    }
    // Activities & Tours
    else if (lowercaseMessage.includes('activity') || lowercaseMessage.includes('tour')) {
        return "Our tours include a wide variety of activities such as hiking, city tours, and beach sports. For a full list, check the 'Activities' section!";
    } else if (lowercaseMessage.includes('adventure') || lowercaseMessage.includes('outdoor')) {
        return "We have exciting outdoor adventures, including zip-lining, scuba diving, and trekking! Explore our 'Activities' section for more.";
    }
    // Reviews & Testimonials
    else if (lowercaseMessage.includes('review') || lowercaseMessage.includes('testimonials')) {
        return "We have wonderful reviews from our clients! You can read them in the 'Reviews' section on our website.";
    }
    // Special Offers
    else if (lowercaseMessage.includes('discount') || lowercaseMessage.includes('offer')) {
        return "We frequently offer discounts on our packages! Check the 'Special Offers' section to see the latest deals.";
    }
    // Accommodations & Hotels
    else if (lowercaseMessage.includes('hotel') || lowercaseMessage.includes('accommodation')) {
        return "We provide luxurious and comfortable accommodations with our travel packages. Check the 'Accommodations' section for details.";
    }
    // Payments & Refunds
    else if (lowercaseMessage.includes('payment') || lowercaseMessage.includes('refund')) {
        return "We accept various payment methods including credit cards and digital wallets. Our refund policy can be found on the 'FAQs' page.";
    }
    // Safety & Travel Insurance
    else if (lowercaseMessage.includes('safety') || lowercaseMessage.includes('insurance')) {
        return "Your safety is our priority! We offer travel insurance as part of our packages. Details can be found on our website.";
    }
    // General Information
    else if (lowercaseMessage.includes('time') || lowercaseMessage.includes('hours')) {
        return "Our customer service is available 24/7 to assist you with your travel needs!";
    }
    // Extended Responses with Variations
    else if (lowercaseMessage.includes('weather')) {
        return "It's always a great idea to check the weather before your trip. You can find current weather updates on our website.";
    } else if (lowercaseMessage.includes('itinerary')) {
        return "You can customize your itinerary to include all your favorite spots! Please visit our 'Itinerary' section for more information.";
    } else if (lowercaseMessage.includes('food') || lowercaseMessage.includes('cuisine')) {
        return "We offer culinary tours that include local food experiences! Check our 'Food Tours' section for details.";
    } else if (lowercaseMessage.includes('guide') || lowercaseMessage.includes('guidebook')) {
        return "Our travel guides are knowledgeable and friendly, ready to help you explore! You can find more about them in our 'Guided Tours' section.";
    } else if (lowercaseMessage.includes('family') || lowercaseMessage.includes('kids')) {
        return "We offer family-friendly packages with activities for all ages. Check our 'Family Packages' section for more!";
    } else if (lowercaseMessage.includes('solo travel') || lowercaseMessage.includes('backpacking')) {
        return "We have great options for solo travelers, including backpacking tours and group travel. Visit our 'Solo Travel' section!";
    } else if (lowercaseMessage.includes('special requests') || lowercaseMessage.includes('customization')) {
        return "We accommodate special requests to make your trip unique. Please share your needs in the 'Customization' section!";
    } else if (lowercaseMessage.includes('emergency') || lowercaseMessage.includes('urgent')) {
        return "In case of an emergency, please contact local authorities. For immediate assistance, reach out to our support team!";
    } 

    // Travel-specific keywords and responses
    else if (lowercaseMessage.includes('travel insurance')) {
        return "Travel insurance is essential for safeguarding your trip. It covers unexpected events such as trip cancellations and medical emergencies.";
    } else if (lowercaseMessage.includes('hawaii travel restrictions')) {
        return "Before traveling to Hawaii, please check the latest travel restrictions on the state's official website for updated information.";
    } else if (lowercaseMessage.includes('travel state gov')) {
        return "You can find travel advisories and restrictions on your state government's website. It's a reliable source for the latest updates.";
    } else if (lowercaseMessage.includes('new york travel restrictions')) {
        return "Check the New York state government website for the latest travel restrictions and health guidelines.";
    } else if (lowercaseMessage.includes('travel agents near me')) {
        return "You can search for travel agents near you using online directories or Google Maps for convenient options.";
    } else if (lowercaseMessage.includes('visa requirements')) {
        return "Visa requirements vary by country and nationality. It's best to check the official government website of the destination country.";
    } else if (lowercaseMessage.includes('travel resources')) {
        return "Explore our 'Travel Resources' section for valuable information on visas, packing lists, and travel tips.";
    } else if (lowercaseMessage.includes('trip cancellation')) {
        return "Trip cancellation insurance is highly recommended. It can provide peace of mind in case you need to cancel your travel plans unexpectedly.";
    } else if (lowercaseMessage.includes('travel guidelines')) {
        return "For travel guidelines, refer to the World Health Organization (WHO) and your country's health department for the latest safety recommendations.";
    }
        return "I'm not sure how to respond to that. Could you please provide more details or ask something else? You can also contact us at (+91) 79813 67125 or (+91) 93923 26481, or email us at support@roamaura.com for assistance.";

    }


    