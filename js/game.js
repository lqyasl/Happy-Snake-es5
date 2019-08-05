// 游戏对象
;(function () {
  function Game (map) {
    // 游戏的三个属性：食物、蛇、地图
    this.food = new Food(map)
    this.snake = new Snake(map)
    this.map = map
    this.start()
  }

  Game.prototype.start = function () {
    this.food.render(this.map)
    this.snake.render(this.map)
  }

  window.Game = Game
})()
var map = document.getElementById('map')
var game = new Game(map)