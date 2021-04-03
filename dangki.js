function myFunction() {
    var at = document.getElementById("email").value.indexOf("@");
    var age = document.getElementById("age").value;
    var fname = document.getElementById("fname").value;
    submitOK = "true";
  
    if (fname.length > 10) {
      alert("Tên không hợp lệ");
      submitOK = "false";
    } 
  
    if (isNaN(age) || age < 1 || age > 100) {
      alert("Số tuổi phải từ 1 đến 100");
      submitOK = "false";
    }
  
    if (at == -1) {
      alert("E-mail không tồn tại!");
      submitOK = "false";
    }
  
    if (submitOK == "false") {
      return false;
    }
  }