const sessionIdtToUserMap = new Map();

function setUser(id, user) {
  sessionIdtToUserMap.set(id, user);
}

function getUser(id) {
  return sessionIdtToUserMap.get(id);
}

module.exports = { setUser, getUser };
