function isPalindrome(words) {
    //dòng lệnh chuyển về chữ thường
    words = words.toLowerCase();
    //dong lenh kiem tra tu doi xung
    if (words === words.split("").reverse().join("")) {
        return true;
    }
}
    let input = prompt("nhap tu kiem tra")
    if(isPalindrome(input)){
        alert( input + " la tu doi xung")
    }else {
        alert(input + " khong phai tu doi xung")
    }

