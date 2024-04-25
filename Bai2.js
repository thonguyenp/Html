function dangKy(){
    var ten = document.getElementById("username").value;
    var p1 = document.getElementById("pass1").value;
    var p2 = document.getElementById("pass2").value;
    
    if (ten == "") {
        alert("Vui long nhap ten");
        username.focus();
        return false;
    }
    else 
    {
        if (ten.length < 8)
        {
            alert("Vui long nhap ten dang nhap nhieu hon 8 ky tu");
            username.focus();
            return false;
        }
    }

    if (p1 == ""){
        alert("Vui long nhap mat khau");
        pass1.focus();
        return false;
    }
    else 
    {
        if (p1.length < 8)
        {
            alert("Vui long nhap mat khau nhieu hon 8 ky tu");
            pass1.focus();
            return false;
        }
    }

    if (p1 != p2 || p2 == "") {
        alert("Mat khau chua trung khop");
        pass2.focus();
        return false;
    }
    else {
        alert("Dang ky thanh cong");
        return true;
    }
}