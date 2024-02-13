function checkOrder() {
    var orderId = document.getElementById("order_id").value;
    var validOrderId = "US-1002-2381"; // Your valid order ID
    if (orderId === validOrderId) {
        // Show tracking and receipt information
        showInformation();
    } else {
        alert("Invalid Order ID. Please enter a valid Order ID.");
    }
}

function showInformation() {
    document.getElementById('orderPrompt').style.display = 'none';
    document.getElementById('orderDetails').style.display = 'block';
    document.getElementById('receipt').style.display = 'block';
    document.getElementById('tracking').style.display = 'block';

    // Update tracking information
document.getElementById('step1').innerText = "Ordered";
document.getElementById('step2').innerText = "Shipped";
document.getElementById('step3').innerText = "In transit";
document.getElementById('step4').innerText = "On Hold(clear insurance!)";

}
 // Display additional address information
 var addressElement = document.createElement('div');
 addressElement.innerHTML = '<div class="title">Shipping Address</div>' +
                             '<div class="info">' +
                             '<div class="row">' +
                             '<div class="col-12">' +
                             '<span id="address">Evan Rowley P. O. Box 165 Menifee CA 92586S</span>' +
                             '</div>' +
                             '</div>' +
                             '</div>';
 document.getElementById('orderDetails').appendChild(addressElement);
