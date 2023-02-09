function J_Click(a_r_janken){
  let a_janken = [ `グー`, `チョキ`, `パー`];
  let b_janken = [ `グー`, `チョキ`, `パー`];

  let b_r_janken = Math.floor( Math.random() * 3);

  if (a_r_janken === b_r_janken){
    Result_end = "あいこです";
  } else if (a_r_janken === 0 && b_r_janken === 1){
    Result_end = "あなたの勝ちです";
  } else if (a_r_janken === 1 && b_r_janken === 2){
    Result_end = "あなたの勝ちです";
  } else if (a_r_janken === 2 && b_r_janken === 0){
    Result_end = "あなたの勝ちです";
  } else {
    Result_end = "あなたの負けです";
  }

  document.getElementById("jankenpon").src = "img/" + "jan" + b_r_janken + ".png";
  document.getElementById("Rejan1").innerHTML = a_janken[a_r_janken] + "を選択しました。ジャンケンの結果は・・・？";
  document.getElementById("Rejan2").innerHTML = b_janken[b_r_janken] + Result_end;
  document.getElementById("jankenpon2").src= "img/" +"jan" + a_r_janken + ".png";
}

