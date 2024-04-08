// ==UserScript==
// @name         Transaction Number URL Generator
// @namespace    http://your.namespace.com
// @version      0.12
// @description  Generate URL based on Transaction Number from <h6> element
// @author       Michael Chapman
// @match        https://www.wholecell.io/*
// @match        https://wholecell.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Find all <h6> elements with the class "text-center"
    var transactionHeaders = document.querySelectorAll('h6.text-center');

    // Loop through each <h6> element
    transactionHeaders.forEach(function(header) {
        // Extract the transaction number from the text content
        var transactionNumberRegex = /Transaction Number: (\d{3}-\d{7}-\d{7})/;
        var match = header.textContent.match(transactionNumberRegex);

        if (match) {
            var transactionNumber = match[1]; // Extracted transaction number
            var baseUrl = 'https://ship13.shipstation.com/orders/all-orders-search-result?quickSearch=';
            var generatedUrl = baseUrl + transactionNumber;

            // Create a clickable link
            var link = document.createElement('a');
            link.href = generatedUrl;
            link.textContent = 'Go to Transaction'; // Text for the link, you can customize it
            link.style.display = 'block'; // Make it a block-level element for better visibility
            link.style.marginTop = '20px'; // Add some space above the link
            link.target = '_blank'; // Open link in new tab
            header.parentNode.appendChild(link); // Append the link after the <h6> element
        }
    });
})();
