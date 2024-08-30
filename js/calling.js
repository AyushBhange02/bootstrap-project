function dialNumber() {
    // The mobile number to dial
    const phoneNumber = '+919373631207';
    // Open the dialer with the specified number
    window.location.href = `tel:${phoneNumber}`;
}