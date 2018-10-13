// 字符串乘法，stringMix('a', 2) => 'aa'
function stringMix (string, pow) {
  let result = ''
  for (let index = 0; index < pow; index++) {
    result += string
  }

  return result
}

// 整数数字或者数字字符串格式化成一定位数的数字字符串
// 例如 formatInt(20, 5) => '00020'
function formatInt (number, width) {
  let inter = Math.floor(number) + ''
  let curWidth = inter.length
  let cutWidth = width - curWidth
  return cutWidth >= 0 ? stringMix('0', cutWidth) + inter
      : stringMix('9', width)
}


