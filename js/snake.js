// 蛇对象
;(function () {
  var position = 'absolute'

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
    // this.render(map)
  }

  Snake.prototype.render = function (map) {
    for (var i = 0, len = this.body.length; i < len; i++) {
      var s = document.createElement('div')
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

  Snake.prototype.move = function () {
    // 蛇的移动
    // 蛇身体的移动：每一个蛇节移动到上一个蛇节的位置
    for (var i = this.body.length - 1; i > 0; i--) {
      this.body[i].x = this.body[i - 1].x
      this.body[i].y = this.body[i - 1].y
    }
    // 蛇头的移动：方向控制
    // 判断方向
    switch (this.direction) {
      case 'right':
        this.body[0].x +=1
        break
    
      case 'left':
        this.body[0].x -=1
        break
    
      case 'top':
        this.body[0].y -=1
        break
    
      case 'bottom':
        this.body[0].y +=1
        break
    }
  }

  window.Snake = Snake
})()

// 测试代码
// var snake = new Snake(map)