console.log("main.js!!");

let counter = 0;
let serihu = "";
let counter2 = 0; 
$(document).ready(function(){
  //デフォルトで表示する要素を指定
  $('#element1').hide();
  $('#element2').hide();
  $('#my-btn').show();
});
$("#my-btn").click(()=>{
  console.log("Test");
  counter += 1;
  if(counter == 1){
    console.log("1");
    serihu = "セリフ表示１";
  }
  else if(counter == 2){
    console.log("2");
    serihu = "セリフ表示２";
  }
  else if(counter == 3){
    serihu = "セリフ表示３";
  }
  else if(counter == 4){

    $('#element1').show();
    $('#element2').show();
    $('#my-btn').hide();
    counter = 4

  }
  $("#text").text(serihu);
});

  $("#element1").click(()=>{
    counter += 1;
    $('#element1').hide();
    $('#element2').hide();
    $('#my-btn').show();
    if(counter == 5){
      console.log("1");
      serihu =  "選択肢１";
      $("#text").text(serihu);
    }
  });
    $("#element2").click(()=>{
      counter += 2;
      $('#element1').hide();
      $('#element2').hide();
      $('#my-btn').show();
     if(counter == 6){
      console.log("2");
      serihu = "選択肢２";
      $("#text").text(serihu);
    }
    
 
  
});




// var n;//文字を増やす処理の回数を数える変数nの宣言
// //↓関数の宣言↓
// function word(){
//   var s = document.getElementById("input_box").value;//HTMLの入力欄に入力された文字を取得する変数sの宣言
//   var len = s.length;//入力された文字の変数sの文字数をカウントする変数lenの宣言
//   document.getElementById('output_space').innerHTML=s.slice(0,n);//HTMLのoutput_spaceというidの要素に、変数sの０文字目からn文字までのテキストを表示する
//   if(n < len){//文字を増やす処理の回数が入力された文字数を超えるまで繰り返す
//     n++;
//   } else{//文字を増やす処理の回数が入力された文字数を超えた時の処理
//     clearInterval(intervalId);//タイマーをリセットする
//     s=null;//変数sを空にする
//     }

// }
// });
// //↓関数の宣言↓
// function startTimer(){
//   n=1;//nの初期値を1とする
//   intervalId=setInterval(word,2000);//2000ミリ秒(2.0秒)ごとにword()関数の処理を実行する
// }
// $(document).ready(()=>{
// 	console.log("Ready");

// 	// 初期化
// 	counter = localStorage.getItem("key_counter");
// 	if(counter == null) counter = 0;
// 	$("#my_counter").text(counter);

// 	// クリックイベント
// 	$("#btn").click(()=>{
// 		counter++;
// 		// doAnimation("#container", "animate_bounce");// Bounce
// 		$("#my_counter").text(counter);
// 		localStorage.setItem("key_counter", counter);
		
// 		if (counter >= 100) {
// 			$("#container").attr("src", "./images/egg_05.png");
// 		}
// 		else if (counter >=70) {
// 			$("#container").attr("src", "./images/egg_04.jpeg");
// 		}
// 		else if (counter >= 40) {
// 			$("#container").attr("src", "./images/egg_03.png");
// 		}
// 		else if (counter >= 20) {
// 			$("#container").attr("src", "./images/egg_02.png");
// 		}
// 	});
	
// 	//リセットボタン
// 	// クリックイベント
// 	$("#reset").click(()=>{
// 		counter = 0
// 		$("#my_counter").text(counter);
// 		localStorage.setItem("key_counter", counter);
// 	});

// 	//デバッグ用
// 	$("#de").click(()=>{
// 		counter = 99
// 		$("#my_counter").text(counter);
// 		localStorage.setItem("key_counter", counter);
// 	});
// 	//卵の画像を変える
// 	// if(counter >= 100){
// 	// 	// $("#my_egg").image("./images/egg_02.png");
// 	// 	$('.image').children('img').attr('src', "./images/egg_02.png");
// 	// }
// 	// $(document).ready(function() {
// 		// アニメーション
// // function doAnimation(id, type){
// // 	const elem = $(id);
// // 	elem.addClass("animate_animated");
// // 	elem.addClass(type);
// // 	elem.on("animationend", ()=>{
// // 		elem.off("animationend");
// // 		elem.removeAttr("class");
// // 	});
// // }
// });