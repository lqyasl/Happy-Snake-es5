// 游戏对象
;(function () {
  var that //存储this的索引
  var timerId

  function Game (map) {
    // 游戏的三个属性：食物、蛇、地图
    this.food = new Food(map)
    this.snake = new Snake(map)
    this.map = map
    that = this
  }

  Game.prototype.start = function () {
    // 1 把蛇和食物对象渲染到地图上
    this.food.render(this.map)
    this.snake.render(this.map)
    // 2 开始游戏逻辑
    // 2.1 让蛇动起来
    runSnake()
    // 2.3 键盘控制方向
    bindKey()
    // 2.4 当蛇碰到食物，处理
    // 判断蛇头的坐标是否与食物的坐标重合
    
  }

  function runSnake () {
    timerId = setInterval(function () {
      that.snake.move(that.food, that.map)
      that.snake.render(that.map)
      // 2.2 当蛇碰到边界，game over
      // 获取蛇头的坐标
      var maxX = that.map.offsetWidth / that.snake.width 
      var maxY = that.map.offsetHeight / that.snake.height 
      var headX = that.snake.body[0].x
      var headY = that.snake.body[0].y
      
      if (headX < 0 || headX >= maxX) {
        alert('game over!')
        clearInterval(timerId)
      }
      if (headY < 0 || headY >= maxY) {
        alert('game over!')
        clearInterval(timerId)
      }

    }, 400)
  }

  function bindKey () {
    document.addEventListener('keydown', function (e) {
      switch (e.keyCode) {
        case 37:
          that.snake.direction = 'left'
          break
        case 38:
          that.snake.direction = 'top'
          break
        case 39:
          that.snake.direction = 'right'
          break
        case 40:
          that.snake.direction = 'bottom'
          break
      }
    }, false)
  }

  window.Game = Game

})()

