let junban
function arrayShuffle(array) {
  for(let i = (array.length - 1); 0 < i; i--){

    // 0〜(i+1)の範囲で値を取得
    let r = Math.floor(Math.random() * (i + 1));

    // 要素の並び替えを実行
    let tmp = array[i];
    array[i] = array[r];
    array[r] = tmp;
  }
  return array;
}
function init() {
  junban = [...Array(5)].map((_, i) => i + 1)
  junban = arrayShuffle(junban);
  let li = document.getElementById("list");
  li.innerHTML = junban;
}
window.onload = function(){
  init() //ページロード時にリストを初期化
}
function generate(){
  if(junban.length == 0){
    init()
  }
  let num = junban.shift();
  let el = document.getElementById("number");
  if(num.length == 1){
    el.innerHTML = "0" + num;
  } else {
    el.innerHTML = num;
  }
  let li = document.getElementById("list");
  li.innerHTML = li.innerHTML + num + "&#13;";
}
