function Food (map, options) {
  options = options || {}
  this.x = options.x || 0
  this.y = options.y || 0
  this.width = options.width || 20
  this.height = options.height || 20
  this.color = options.color || 'red'

  this.getRandom(map)
  this.render(map)
}

var position = 'absolute'
Food.prototype.render = function (map) { 
  var f = document.createElement('div')
  f.classList.add('food')
  f.style.position = position
  f.style.width = this.width + 'px'
  f.style.height = this.height + 'px'
  f.style.backgroundColor = this.color
  f.style.top = this.y + 'px'
  f.style.left = this.x + 'px'
  map.appendChild(f)
}

Food.prototype.getRandom = function (map) {
  var mapWidth = parseInt(Tools.getComputedStyle(map, 'width'))
  var mapHeight = parseInt(Tools.getComputedStyle(map, 'height'))
  this.x = Tools.getRandomIntInclusive(0,  mapWidth / this.width - 1) * this.width
  this.y = Tools.getRandomIntInclusive(0,  mapHeight / this.height - 1) * this.height
}





var map = document.querySelector('#map')
var food = new Food(map)