start();
var box = 0;

function start(){

  chrome.storage.sync.get('time', function(data){
  toggleText();
      update();

    //addDate(data.time,0);
    var element = document.getElementById("date1"); //location
    element.innerHTML = data.time;
      if (data.time === undefined) {
      element.innerHTML = "No Save";
      }


   });
  chrome.storage.sync.get('time2', function(data){
    //addDate(data.time2,1);
    //console.log(data.time2);
    var element2 = document.getElementById("date2"); //location
    element2.innerHTML = data.time2;
        if (data.time2 === undefined) {
        //toggleDate2();
        element2.innerHTML = "No Save";
        }

  });
chrome.storage.sync.get('time3', function(data){
    //addDate(data.time2,1);
    //console.log("time3:" + data.time3);
    var element3 = document.getElementById("date3"); //location
    element3.innerHTML = data.time3;
        if (data.time3 === undefined) {
        element3.innerHTML = "No Save";
        }
  });

}
function update(){ //This is for info on each tab below
  clear();
  //addDate();
  chrome.storage.sync.get('mylink', function(data){

    var index = data.mylink.length;
          for (j = 0; j < index; j++){
              var element = document.getElementById("text"); //location
              console.log("Update1:" + data.mylink[j]); //old
              textfield = element.innerHTML;
              element.innerHTML = textfield + "<br />" + data.mylink[j];
            }
  });
  chrome.storage.sync.get('mylink2', function(data){

    var index2 = data.mylink2.length;
          for (i = 0; i < index2; i++){
              var ele = document.getElementById("text2"); //location
              console.log("Update2:" + data.mylink2[i]);
              textf = ele.innerHTML;
              ele.innerHTML = textf + "<br />" + data.mylink2[i];
            }
  });
  chrome.storage.sync.get('mylink3', function(data){

    var index3 = data.mylink3.length;
          for (x = 0; x < index3; x++){
              var el = document.getElementById("text3"); //location
              console.log("Update3:" + data.mylink3[x]);
              textg = el.innerHTML;
              el.innerHTML = textg + "<br />" + data.mylink3[x];
            }
  });
//toggleText();
}
function toggleText() {

    var x = document.getElementById("text");
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
    var y = document.getElementById("text2");
    if (y.style.display == 'none') {
        y.style.display = 'block';
    } else {
        y.style.display = 'none';
    }
    var y = document.getElementById("text3");
    if (y.style.display == 'none') {
        y.style.display = 'block';
    } else {
        y.style.display = 'none';
    }
}
function toggleDate1() {
    var x = document.getElementById("date1");
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function toggleDate2() {
    var y = document.getElementById("date2");
    if (y.style.display == 'none') {
        y.style.display = 'block';
    } else {
        y.style.display = 'none';
    }
}
function toggleDate3() {
    var z= document.getElementById("date3");
    if (z.style.display == 'none') {
        z.style.display = 'block';
    } else {
        z.style.display = 'none';
    }
}

function addDate(d) {
    var sp2 = document.getElementById("date1");
    var parentDiv = sp2.parentNode;
    var move = document.getElementById("date2");
    var three = document.getElementById("date3");


    var txt = document.getElementById("text");
    var parent = txt.parentNode;
    var txt2 = document.getElementById("text2");
     var txt3 = document.getElementById("text3");

    var drk = document.getElementById("dark");
    var sve = document.getElementById("Save");

    three.innerHTML = move.innerHTML; //new

    move.innerHTML = sp2.innerHTML; //new

    sp2.innerHTML = d;
}
function add(word) {
  //var element = document.getElementById("text"); //location
  //textfield = element.innerHTML;
  //element.innerHTML = textfield + "<br />" + word;
  //element.style.color = "#fd971f";
}
function dark(e) {
  element = document.getElementById("dark");
  //var element = document.getElementsByTagName("BODY")[0];
  element.style = "-webkit-filter: blur(1px)";

  //invert(1),blur(1px),hue-rotate(90deg),saturate(4),sepia(1),grayscale(1)



  chrome.tabs.executeScript(null,
    {code:'document.body.style = "-webkit-filter: invert(.9)"'});
  chrome.tabs.executeScript(null,
    {code:'document.body.style.backgroundColor = "#242424"'});
  //window.close();

 // chrome.tabs.executeScript(null,
 //   {code:'document.getElementsByTagName("a").style.color = "#a6e22e"'});

}
function backup(){
          chrome.storage.sync.get('mylink2', function(data){
          var storedtwo = data.mylink2;

          chrome.storage.sync.set({ 'mylink3': data.mylink2 }, function(){ //mylink = link[i]
          console.log("inside store 3:" + data.mylink2[index]); /////// WAS ! BEFORe
          });
      });

        chrome.storage.sync.get('mylink', function(data){
          var stored = data.mylink;

             chrome.storage.sync.set({ 'mylink2': data.mylink }, function(){
            console.log("inside store 2:" + data.mylink[index]);
          });

      });
}
function store(linky, index){

        chrome.storage.sync.set({ 'mylink': linky }, function(){ //mylink = link[i]
        console.log("inside store 1:" + linky[index]);
      });



}
function storeTime(date){

       chrome.storage.sync.get('time2', function(data){
          var datetwo = data.time2;
         chrome.storage.sync.set({ 'time3': data.time2 }, function(){
         });

      });

        chrome.storage.sync.get('time', function(data){

          var dateone = data.time; //location
          chrome.storage.sync.set({ 'time2': data.time }, function(){ //settubg
         });

      });



    chrome.storage.sync.set({ 'time': date }, function(){
    });

}

function save(e){



  var d = new Date();
  var date = d.getDate();
  var hours = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
  var am_pm = d.getHours() >= 12 ? "PM" : "AM";
  var minutes = d.getMinutes()
  var seconds = d.getSeconds();
  var month = d.getMonth() + 1;
  //toggleDate1();
  var min = minutes.toString();
  if (minutes < 10){
     min = "0" + minutes.toString();
  }
  var c = month.toString() + '/' + date.toString() + ' (' + hours.toString() + ':' + min  +' '+ am_pm.toString() + ')';
  var n = c.toString();


  var inverse = 2- box;
  addDate(n);
  storeTime(n);
  backup();
  var i = 0;
  var links = [];


console.log("inv:" + inverse);


chrome.windows.getCurrent(function(window)
{
     chrome.tabs.getAllInWindow(window.id, function(tabs)
    {
          var length = tabs.length;

          for (i = 0; i < length; i++){
            links[i] = tabs[i].url;
           console.log("storing now:" + links[i]);
          }


          //links.push(tabs.url);
          //console.log("logging:",links[i]);
          i += 1;
          //add(tab.url);
          console.log("storing:" + links);
          store(links, i);
          update();
      //});

    });
    //update();
  });
  box += 1;
  if (box >= 3){
    box = 0;
  }

//window.close();
//window.location.reload();
}

function display(e) {

  toggleText();
}
function open(choice) {
  //chrome.tabs.executeScript(null,
  //    {code:'alert(links[1])'});
  //var page = document.getElementById("text"); //location
  //textfield = element.innerHTML;
    if (choice == 0){
      chrome.storage.sync.get('mylink', function(data){

          chrome.windows.onCreated.addListener(function(createInfo) {

          console.log("ID: ", createInfo.id);

          var index = data.mylink.length ;

         //chrome.tabs.create({createInfo.id, url: data.mylink[1] });
          for (j = 1; j < index; j++){
              chrome.tabs.create({ windowId: createInfo.id, url: data.mylink[j] });
              console.log("Stored Data:" + data.mylink[j] + j);
            }

          });
          chrome.windows.create({ url: data.mylink[0]});
      });
    }
    if (choice == 1){
      chrome.storage.sync.get('mylink2', function(data){

          chrome.windows.onCreated.addListener(function(createInfo) {

          console.log("ID: ", createInfo.id);

          var index2 = data.mylink2.length ;

         //chrome.tabs.create({createInfo.id, url: data.mylink[1] });
          for (j = 1; j < index2; j++){
              chrome.tabs.create({ windowId: createInfo.id, url: data.mylink2[j] });
              console.log("Stored Data2:", data.mylink2[j], j);
            }

          });
          chrome.windows.create({ url: data.mylink2[0]});
      });
    }
    if (choice == 2){
      chrome.storage.sync.get('mylink3', function(data){

          chrome.windows.onCreated.addListener(function(createInfo) {

          console.log("ID: ", createInfo.id);

          var index = data.mylink3.length ;

         //chrome.tabs.create({createInfo.id, url: data.mylink[1] });
          for (j = 1; j < index; j++){
              chrome.tabs.create({ windowId: createInfo.id, url: data.mylink3[j] }); //////////wasmylink[j]
              console.log("Stored Data:" + data.mylink3[j] + j);
            }

          });
          chrome.windows.create({ url: data.mylink3[0]});
      });
    }
}
function date1(e){
  //chrome.tabs.executeScript(null, {code:'alert("what up")'});
  open(1);
}
function date2(e){
  open(0);
}
function date3(e){
  open(2);
}
function clear(e){
  var element = document.getElementById("text"); //location
  element.innerHTML = "Links 1:";
  var ele = document.getElementById("text2"); //location
  ele.innerHTML = "Links 2: ";
  var three = document.getElementById("text3"); //location
  three.innerHTML = "Links 3: ";

}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  divs[0].addEventListener('click', save);
  divs[1].addEventListener('click', dark);
  divs[2].addEventListener('click', display);

  divs[3].addEventListener('click', date2);
  divs[4].addEventListener('click', date1); // switched
  divs[5].addEventListener('click', date3);
//divs[6] - text
//divs[7] - text2
  divs[9].addEventListener('click', clear);
 //important!!!!!!!

});
