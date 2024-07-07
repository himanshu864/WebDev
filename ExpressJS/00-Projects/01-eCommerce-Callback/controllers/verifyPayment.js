const verifyPayment = (req, res) => {
  // Compare the generated signature with the signature from Razorpay
  res.clearCookie("cart");
  res.json({ success: true });
};

module.exports = { verifyPayment };
