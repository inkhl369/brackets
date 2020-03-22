module.exports = function check(str, bracketsConfig) {
  // your solution

  var stack = []
  var i, j, b, brack,trig, eq, result

  for (i = 0; i<str.length; i++) {
        brack = str[i]
        eq = false
        trig = false
    for (j = 0; j<bracketsConfig.length; j++) {
      if (brack == bracketsConfig[j][1]) {
          eq = true
          b = j

        if (brack == bracketsConfig[j][0]) {
          trig = true
        }
        break
        }
    }
    if (eq) {
      if (trig) {
          if (brack == stack[stack.length-1]){
            stack.pop()
          }
          else {
            stack.push(brack)
          }
      }
      else {
        if (stack.lenght == 0 || bracketsConfig[b][0] != stack.pop()) {
          return false
        }
      }
    }
    else {
      stack.push(brack)
    }
  }
  result = (stack.length == 0)

  if (str.length === 1){
  return false}
 if (str.length === 0) {
  return true;
}
  
  return (result)
}
