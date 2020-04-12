// pages/test/test.js
Page({
  data: {
    msg: "hello world",
    inputs: ""
  },
  bindinputs(op) {
    console.log(op)
    this.setData({
      inputs: op.detail.value
    })
  }

})