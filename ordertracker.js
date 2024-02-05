function checkOrder() {
    var orderId = document.getElementById("order_id").value;
    var validOrderId = "20240128-0001"; // Your valid order ID
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
document.getElementById('step3').innerText = "On the way";
document.getElementById('step2').innerText = "Held";
}
 // Display additional address information
 var addressElement = document.createElement('div');
 addressElement.innerHTML = '<div class="title">Shipping Address</div>' +
                             '<div class="info">' +
                             '<div class="row">' +
                             '<div class="col-12">' +
                             '<span id="address">Steven A. Hon. 4465 Boca way Spc 113 Reno, NV 89502</span>' +
                             '</div>' +
                             '</div>' +
                             '</div>';
 document.getElementById('orderDetails').appendChild(addressElement);
