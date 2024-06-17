const User = require("../models/user");

const handleGetUsers = async (req, res) => {
  const allDbUsers = await User.find({});
  const html = `<ul>
  ${allDbUsers
    .map((user) => `<li> ${user.first_name} - ${user.email}</li>`)
    .join("")}
  </ul>`;
  return res.send(html);
};

module.exports = { handleGetUsers };
