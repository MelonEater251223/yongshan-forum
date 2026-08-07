
function time(){
    const now = new Date();
    const month = (now.getMonth() + 1).toString();
    const date = now.getDate().toString();
    const timeString = `${month}/${date}`;
    return timeString;
}

let shijian = time()

if(shijian==='8/6'){
    alert("今天是Windy的生日，让我们祝Windy生日快乐!")
}
else if(shijian==='12/10'){
    alert("今天是食瓜之众的生日，让我们祝食瓜之众生日快乐!")
}
else if(shijian==='2/18'){
    alert("今天是仰望者的生日，让我们祝仰望者生日快乐!")
}
else if(shijian==='11/28'){
    alert("今天是Asju流烛的生日，让我们祝Asju流烛生日快乐!")
}
else if(shijian==='7/27'){
    alert("今天是劭远征的生日，让我们祝劭远征生日快乐!")
}
else if(shijian==='1/8'){
    alert("今天是伍的生日，让我们祝伍生日快乐!")
}
else if(shijian==='6/22'){
    alert("今天是徐海旺的生日，让我们祝徐海旺生日快乐!")
}
else{
    console.log("今天不是特殊日期,今天是"+time())
}

alert("今天是" + time() + "，欢迎使用永山论坛!\n注:该论坛不隶属于莆田九中，其包括的内容也不受到莆田九中的赞助。\n部分文本含有title属性需通过光标触发。\n祝您拥有一个良好的体验!\n\n其实我们还没做完doge")