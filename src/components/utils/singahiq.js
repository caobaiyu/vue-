

export const dingahi = function (jju,callback) {
  setTimeout(function () {
    callback()
    if (jju) {
      console.log("**-**")
      console.log(arguments)
      setTimeout(arguments.callee, 1000);
    } 
  }, 1000)
}