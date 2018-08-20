var input_p1 = document.querySelector('.input--p1');
var input_p2 = document.querySelector(".input--p2");
var inputs = document.getElementsByClassName("score-input");
var p1_hole_array = document.getElementsByClassName("player1__hole");
var p2_hole_array = document.getElementsByClassName("player2__hole");
var totals_array = document.getElementsByClassName("score--total");
var p1_index = 0;
var p2_index = 0;

function int_checker(value){
  var regex_digits = /^\d+$/;
  return regex_digits.test(value);
}

function total_up_score(array){
  let total = 0
  for (var i = 0; i < array.length; i++){
    total += Number(array[i].innerHTML);
  }
  return total
}

inputs[0].onclick = function(){
  if (int_checker(input_p1.value)){
    p1_hole_array[p1_index].innerHTML = input_p1.value;
    p1_index++;
    if (p1_index >= p1_hole_array.length){
      totals_array[0].innerHTML = total_up_score(p1_hole_array);
    }
  }
  input_p1.value = "";
}
inputs[1].onclick = function(){
  if (int_checker(input_p2.value)){
    p2_hole_array[p2_index].innerHTML = input_p2.value;
    p2_index++;
    if (p2_index >= p2_hole_array.length){
      totals_array[1].innerHTML = total_up_score(p2_hole_array);
    }
  }
  input_p2.value = "";
}
