$(document).ready(function () {
  $(".pay-form").submit(function (e) {
    e.preventDefault();

    const formData = $(this).serialize();

    $.ajax({
      url: "/createOrder",
      type: "POST",
      data: formData,
      success: function (res) {
        if (res.success) {
          const options = {
            key: res.key_id,
            amount: res.amount,
            currency: "INR",
            name: res.product_name,
            description: res.description,
            image: res.image,
            order_id: res.order_id,
            handler: function (response) {
              $.ajax({
                url: "/clearCart",
                type: "POST",
                contentType: "application/json",
                success: function (verifyResponse) {
                  if (verifyResponse.success) {
                    alert("Payment Successful and Cart Emptied");
                    window.location.href = "/";
                  } else {
                    alert("Payment Verification Failed");
                  }
                },
                error: function (err) {
                  console.error("Error during payment verification:", err);
                  alert("Payment verification failed. Please try again.");
                },
              });
            },
            prefill: {
              contact: res.contact,
              name: res.name,
              email: res.email,
            },
            notes: {
              description: res.description,
            },
            theme: {
              color: "#2300a3",
            },
          };
          var razorpayObject = new Razorpay(options);
          razorpayObject.on("payment.failed", function (response) {
            alert("Payment Failed");
            console.log(response.error);
          });
          razorpayObject.open();
        } else {
          alert(res.message);
        }
      },
      error: function (err) {
        const errorMessage = err.responseJSON
          ? err.responseJSON.message
          : "Order creation failed. Please try again.";
        alert(errorMessage);
      },
    });
  });
});
