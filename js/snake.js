// 蛇对象
;(function () {
  var position = 'absolute'
  var elements = [] //存放蛇节元素

  function Snake (options) {
    options = options || {}
    // 蛇的大小
    this.width = options.width || 20
    this.height = options.height || 20
    // 蛇的方向
    this.direction = options.direction || 'right'
    // 蛇的身体，前面第一节为蛇头
    this.body = [
      {x: 3, y: 2, color: 'green'},
      {x: 2, y: 2, color: 'hotpink'},
      {x: 1, y: 2, color: 'hotpink'}
    ]
  }

  Snake.prototype.render = function (map) {
    for (var i = 0, len = this.body.length; i < len; i++) {
      var s = document.createElement('div')
      elements.push(s) //将创建的div元素收集到这个数组中，以便后续删除操作
      var obj = this.body[i]
      s.style.position = position
      s.classList.add('snake')
      s.style.width = this.width + 'px'
      s.style.height = this.height + 'px'
      s.style.left = obj.x * this.width + 'px'
      s.style.top = obj.y * this.height + 'px'
      s.style.backgroundColor = obj.color 
      map.appendChild(s)
    }
  }

  Snake.prototype.move = function (food, map) {
    // 蛇的移动
    // 删除之前创建的蛇
    remove()
    // 蛇身体的移动：每一个蛇节移动到上一个蛇节的位置
    for (var i = this.body.length - 1; i > 0; i--) {
      this.body[i].x = this.body[i - 1].x
      this.body[i].y = this.body[i - 1].y
    }
    var head = this.body[0]
    // 蛇头的移动：方向控制
    // 判断方向
    switch (this.direction) {
      case 'right':
        head.x +=1
        break
    
      case 'left':
        head.x -=1
        break
    
      case 'top':
        head.y -=1
        break
    
      case 'bottom':
        head.y +=1
        break
    }

    // 2.4 当蛇碰到食物，处理
    // 判断蛇头的坐标是否与食物的坐标重合
    var headX = head.x * this.width
    var headY = head.y * this.height
    
    if (headX === food.x && headY === food.y) {
      food.render(map)
      console.log('1111111 :', 1111111);
      var last = this.body[this.body.length - 1]
      this.body.push({
        x: last.x,
        y: last.y,
        color: last.color
      })
    }

  }

  function remove() {
    // 数组中删除元素，从后往前删
    for (var i = elements.length - 1; i >= 0; i--) {
      // 从map中删除food元素
      elements[i].parentNode.removeChild(elements[i])

      // 从数组中删除记录，i索引开始，删除一个
      elements.splice(i, 1)
    }
  }

  window.Snake = Snake
})()

