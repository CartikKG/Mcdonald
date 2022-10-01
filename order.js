function placeorder() {
    document.getElementById("displaypro").innerHTML = "";
    document.getElementById("inordersucces").style.display = "block";
    document.getElementById("showamount").innerText = "0";
    document.getElementById("orderNo").innerText = "";
    document.getElementById("msgpopu1").style.display = "none";
    document.getElementById("msgpopu0").innerText = "YOUR ORDER IS PREPARING";
    let temp = document.getElementById("orderPOPUP");
    temp.id = "orderPOPUPFinal";
    order = true;
    let promise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        if (order == true) {
          resolve("Order Place Succesfully");
        } else {
          reject("Order Failed");
        }
      }, 3000);
    });
    promise
      .then(function (result) {
        display();
      })
      .catch(function (error) {});
    //   display();
  }

  function display() {
    var randomNumber1 = Math.floor(Math.random() * 10000) + 1;
    //   console.log(randomNumber1);

    document.getElementById("orderNo").innerText =
      "Order No is - " + randomNumber1;
    let all = document.getElementsByName("checksboxes");
    document.getElementById("msgpopu1").style.display = "block";
    document.getElementById("msgpopu0").innerText = "YOUR ORDER IS READY !!";
    //   console.log(all);
    document.getElementById("inordersucces").style.display = "none";
    let totalamount = 0;
    if (all[0].checked == true) {
      let div = document.createElement("div");
      let img = document.createElement("img");
      let h3 = document.createElement("h3");
      h3.innerText = "Burger : QTY-1";
      img.src = "./Burger/burger_1.jpg";
      div.append(img, h3);
      document.getElementById("displaypro").append(div);

      totalamount += 45;
      console.log(Burger);
    }
    if (all[1].checked == true) {
      let div = document.createElement("div");
      let img = document.createElement("img");
      let h3 = document.createElement("h3");
      h3.innerText = "Fries : QTY-1";
      img.src = "./Burger/Untitled-2.jpg";
      div.append(img, h3);
      document.getElementById("displaypro").append(div);

      totalamount += 55;
      console.log(Fries);
    }
    if (all[2].checked == true) {
      let div = document.createElement("div");
      let img = document.createElement("img");
      let h3 = document.createElement("h3");
      h3.innerText = "ColdDrink : QTY-1";
      img.src = "./Burger/Untitled-4.jpg";
      div.append(img, h3);
      document.getElementById("displaypro").append(div);

      totalamount += 20;
      console.log(ColdDrink);
    }

    if (all[3].checked == true) {
      let div = document.createElement("div");
      let img = document.createElement("img");
      let h3 = document.createElement("h3");
      h3.innerText = "Combo : QTY-1";
      img.src = "./Burger/Untitled-3.jpg";
      div.append(img, h3);
      document.getElementById("displaypro").append(div);

      totalamount += 149;
      console.log(Combo);
    }

    document.getElementById("showamount").innerText = totalamount;
  }
  document.querySelector("#closetheedit").addEventListener("click", close);
  function close() {
    let idd = document.getElementById("orderPOPUPFinal");
    idd.id = "orderPOPUP";
  }