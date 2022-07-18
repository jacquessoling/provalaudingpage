function input() {
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var input3 = document.getElementById("input3");
    var msg1;
    var msg2;
    var msg3;
    msg1 = input1.value;
    msg2 = input2.value;
    msg3 = input3.value;

    alert("Nome: " + msg1 + "\n" + "E-mail: " + msg2 + "\n" + "Telefone: " + msg3);

}