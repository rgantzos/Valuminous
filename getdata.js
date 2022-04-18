var request = new XMLHttpRequest(); 
request.open("GET", 'https://raw.githubusercontent.com/Scratchfangs/Valuminous/main/rsz_12021-08-12-ts3_thumbs-9cf.png ');
request.onreadystatechange = function() { 
if (request.readyState === 4 && request.status === 200) {
  data = xhttp.responseText;
  img = "<img src="+data"+"alt="Italian Trulli">";
  Document.getElementById("test").innerHTML = img;


}
};
request.send(null); 
