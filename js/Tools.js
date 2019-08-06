// 工具对象
;(function (window) {
  var Tools = {
    getRandomIntInclusive (min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
    },
    getComputedStyle (ele, prop) {
      return  ele.currentStyle ? ele.currentStyle(prop) : window.getComputedStyle(ele, null)[prop]
    },
    getRandomColor(){  
      return '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6)
    }
  }

  window.Tools = Tools
})(window)