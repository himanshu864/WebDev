// Logic for correct email format
function isStr(string) {
  if (string == "") return false;

  for (const c of string) {
    if (c >= "a" && c <= "z") continue;
    else if (c >= "A" && c <= "Z") continue;
    else if (c >= "0" && c <= "9") continue;
    else if (c == "-" || c == "_") continue;
    else return false;
  }
  return true;
}

function isEmail(email) {
  let start = "";
  let middle = "";
  let end = "";
  let at = false;
  let dot = false;

  for (const c of email) {
    if (!at) {
      if (c == "@") at = true;
      else start += c;
    } else if (!dot) {
      if (c == ".") dot = true;
      else middle += c;
    } else end += c;
  }
  if (!at || !dot || !isStr(start) || !isStr(middle) || !isStr(end))
    return false;
  return true;
}

// Logic for correct email format
function isStr(string) {
  if (string == "") return false;

  for (const c of string) {
    if (c >= "a" && c <= "z") continue;
    else if (c >= "A" && c <= "Z") continue;
    else if (c >= "0" && c <= "9") continue;
    else if (c == "-" || c == "_") continue;
    else return false;
  }
  return true;
}

function isEmail(email) {
  let start = "";
  let middle = "";
  let end = "";
  let at = false;
  let dot = false;

  for (const c of email) {
    if (!at) {
      if (c == "@") at = true;
      else start += c;
    } else if (!dot) {
      if (c == ".") dot = true;
      else middle += c;
    } else end += c;
  }
  if (!at || !dot || !isStr(start) || !isStr(middle) || !isStr(end))
    return false;
  return true;
}

module.exports = { isEmail };
