// console.log('你好，我是popup！');

$('#sureButton').click(() => {

    var items = $('#textAreaI').val();
    console.log(items);
    var itemList = items.split('\n');
    console.log(itemList)

    for(var i = 0;i<itemList.length;i++){
        if (itemList[i] == ''){
            continue;
        }
        chrome.tabs.create({url: itemList[i]});
    }
});
