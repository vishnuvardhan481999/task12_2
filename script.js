
const form = document.getElementById('vat-form');
const countryCodeInput = document.getElementById('country-code');
const vatRateDiv = document.getElementById('vat-rate');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const countryCode = countryCodeInput.value.toUpperCase();
  try {
    const response = await fetch(`https://vat.abstractapi.com/v1/?api_key=YOUR_API_KEY&country_code=${countryCode}`);
    const data = await response.json();
    if (data.rate) {
      vatRateDiv.textContent = `VAT Rate for ${countryCode}: ${data.rate}%`;
    } else {
      vatRateDiv.textContent = `VAT Rate not found for ${countryCode}`;
    }
  } catch (error) {
    console.error('Error fetching VAT rate:', error);
    vatRateDiv.textContent = 'Error fetching VAT rate. Please try again later.';
  }
});