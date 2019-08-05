// 匿名函数自调用，避免命名冲突
;
(function () {
  var position = 'absolute'
  var elements = [] //收集创建的食物元素，为后续删除做准备

  function Food(map, options) {
    options = options || {}
    this.x = options.x || 0
    this.y = options.y || 0
    this.width = options.width || 20
    this.height = options.height || 20
    this.color = options.color || 'red'

    this.getRandom(map)
    // this.render(map)
  }

  Food.prototype.render = function (map) {
    // 删除之前创建的食物
    remove()

    var f = document.createElement('div')
    elements.push(f) //收集创建的食物元素，为后续删除做准备
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
    this.x = Tools.getRandomIntInclusive(0, map.offsetWidth / this.width - 1) * this.width
    this.y = Tools.getRandomIntInclusive(0, map.offsetHeight / this.height - 1) * this.height
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

  window.Food = Food

})()

// 测试
// var map = document.querySelector('#map')
// var food = new Food(map)
