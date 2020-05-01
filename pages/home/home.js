// pages/home/home.js
Page({
  data: {
    name: 'Coderwhy',
    age: 18,
    students: [
      {id: 110, name : '郑豪', age: 24},
      {id: 111, name : '万吉鑫', age: 25},
      {id: 112, name : '马恩权', age: 26},
      {id: 113, name : '张炫', age: 27}
    ],
    counter: 0
  },
  handleBtnClick(){
    // 1.错误做法：界面是不会刷新的
    // this.data.counter +=1
    // console.log(this.data.counter)

    // 2.this.setData
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubtraction(){
    this.setData({
      counter: this.data.counter - 1
    })
  }

})