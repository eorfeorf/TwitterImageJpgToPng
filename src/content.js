// 文字列を置換する
var result = location.href;

// フォーマットを変更する
var format = false;

if(result.indexOf('format=jpg') > -1){
    result = result.replace('format=jpg', 'format=png');
    format = true;
}

var nameIndex = result.indexOf('name=');
if(nameIndex > -1)
{
    // 末端まで削除してから追加
    result = result.slice(0, nameIndex);
    result = result + 'name=large';
}

if(format)
{
    window.location.href = result    
}


