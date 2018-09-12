module.exports = function solveEquation(equation) {

  let arr = equation.match(/-? ?\d+/gi);

  let a = Number(arr[0]);
  let b = Number(arr[2].replace(" ",""));
  let c = Number(arr[3].replace(" ",""));
  
  return [Math.round((-b + Math.sqrt((b*b) - 4 * (a * c))) / (2 * a)), 
          Math.round((-b - Math.sqrt((b*b) - 4 * (a * c))) / (2 * a))].sort((a,b)=>a-b)
}
