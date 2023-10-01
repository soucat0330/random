let junban;
function arrayShuffle(array) {
  for (let i = (array.length - 1); 0 < i; i--) {
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
  const maxnum = parseInt(document.getElementById("max").value, 10); //スライダーを取得
  junban = Array.from({ length: maxnum }, (_, index) => index + 1);
  //junban = [...Array(maxnum.value)].map((_, i) => i + 1);
  // console.log(junban);

  const checks = document.getElementsByClassName('checks'); //ここから設定内容を取得
  for (let i = 0; i < maxnum; i++) {
    if (checks[i].checked === true) {
      junban = junban.filter(item => item !== (i + 1));
    }
  }


  junban = arrayShuffle(junban);
  let li = document.getElementById("list");
  li.innerHTML = "";
  let el = document.getElementById("number");
  el.innerHTML = "00";
}
window.onload = function () {
  for (let i = 0; i < 37; i++) {
    createcheck(i + 1);
  }
  init(); //ページロード時にリストを初期化
  let maxnum = document.getElementById("max");
  maxnum.addEventListener("input", function () {
    document.getElementById("maxdis").innerHTML = "最大値:" + maxnum.value
    let nonum = document.getElementById("nonum");
    let clone = nonum.cloneNode(false);
    nonum.parentNode.replaceChild(clone, nonum);
    for (i = 0; i < maxnum.value; i++) {
      createcheck(i + 1);
    }
  }, false);
}
function generate() {
  let randbtn = document.querySelector(".btn");
  randbtn.style.background = "#bf5000";
  randbtn.setAttribute("href", "javascript:void(0)");
  if (junban.length == 0) {
    init();
  }
  let el = document.getElementById("number");
  let count = 0;
  const rand = () => {
    el.innerHTML = Math.floor(Math.random() * 99);
    count++;
  }
  const intervalId = setInterval(() => {
    rand();
    if (count > 20) {
      clearInterval(intervalId);
      let num = junban.shift();
      let li = document.getElementById("list");
      el.innerHTML = ('00' + num).slice(-2);
      li.innerHTML = li.innerHTML + ('00' + num).slice(-2) + "\n";
      randbtn.setAttribute("href", "javascript:generate()");
      randbtn.style.background = "#eb6100";
    }
  }, 30);
}
function reset() {
  let ans = window.confirm("リセットしますか？");
  if (ans) {
    init();
  }
}
function set() {
  let me = document.getElementById("menu");
  let dis = document.getElementById("display");
  me.style.display = "none";
  dis.style.display = "none";
  let set = document.getElementById("set");
  set.style.display = "block";
}
function setstop() {
  let me = document.getElementById("menu");
  let dis = document.getElementById("display");
  let set = document.getElementById("set");
  if (window.confirm("リセットされますがよろしいですか？")) {
    me.style.display = "block"; //表示を戻す
    dis.style.display = "block";
    set.style.display = "none";
    init() //初期化
  }
}
function createcheck(i) {
  let nonum = document.getElementById("nonum");
  let la = document.createElement("label");
  let br = document.createElement("br");
  la.setAttribute("for", i);
  la.innerText = i;
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", "checks");
  checkbox.setAttribute("id", i);
  nonum.appendChild(checkbox);
  nonum.appendChild(la);
  nonum.appendChild(br);
}
