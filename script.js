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
  junban = [];
  for(let i=1;i<37;i++){
    if(i.length == 1){
      junban.push("0" + i);
    } else {
      junban.push(i);
    }
  }
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
  el.innerHTML = num
  let li = document.getElementById("list");
  li.innerHTML = li.innerHTML + num + "&#13;";
}
