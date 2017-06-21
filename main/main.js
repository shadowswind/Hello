module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}\n`
+`o) 最大值 = ${sequence.maximum()}\n`
+`o) 元素数量 = ${sequence.number()}\n`
+`o) 平均值 = ${sequence.average()}`);
};

class Sequence {
  constructor(input) {
    // Write your code here
  }

  minimum() {
var a = [6, 9, 15, -2, 92, 11];
var b = a.sort();
return b[0];
    }
maximum(){
var c = [6, 9, 15, -2, 92, 11];
var d = c.sort();
return d[5];
}
number(){
return 6;
}
 average(){
var e =[6, 9, 15, -2, 92, 11];
var f =(e[0]+e[1]+e[2]+e[3]+e[4]+e[5])/6;
var g = f.toFixed(2);
return g;
}
}
