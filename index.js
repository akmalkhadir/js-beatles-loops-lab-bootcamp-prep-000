// add solution here
function theBeatlesPlay(musicians,instruments){
  var array = [];
  var arrayLength = array.length;
for (var i = 0; i < arrayLength ; i++){
  array.push(`${musicians(i)} plays ${instruments}`)
}
  return array
}
