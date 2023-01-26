
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr=[];
  if(arguments.length === 0){
    return [];
  }else{
    if(matrix !== []){
      for(i=0;i<matrix.length;i++){
        if(i%2 == 0){
          for(j = 0;j<matrix[i].length;j++){
            arr.push(matrix[i][j]);
          }
        }else{
          for(l = matrix[i].length-1; l>=0;l--){
            arr.push(matrix[i][l]);
          }
        }
      }
  }
    return arr;
  }

}
