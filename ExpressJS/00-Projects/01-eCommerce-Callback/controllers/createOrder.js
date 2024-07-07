const Razorpay = require("razorpay");
const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const createOrder = (req, res) => {
  const { name, description, price, image } = req.body;
  const amount = price * 100;

  const options = {
    amount: amount,
    currency: "INR",
    receipt: `order_rcptid_${Date.now()}`, // unique receipt everytime
  };

  // create order
  instance.orders.create(options, function (err, order) {
    if (err) {
      console.log(err);
      return res.send({
        success: false,
        msg: "Order creation failed",
        error: err,
      });
    }

    res.send({
      success: true,
      msg: "Order Created",
      order_id: order.id,
      amount: amount,
      key_id: process.env.RAZORPAY_KEY_ID,
      product_name: name,
      description: description,
      image: image,
      contact: "8567345632",
      name: "Gaurav Kumar",
      email: "gauravKumar123@gmail.com",
    });
  });
};

module.exports = { createOrder };
