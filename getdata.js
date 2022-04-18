var request = new XMLHttpRequest(); 
request.open("GET", 'https://raw.githubusercontent.com/Scratchfangs/Valuminous/main/projects/scraft.html');
request.onreadystatechange = function() { 
if (request.readyState === 4 && request.status === 200) {
  htmldata = xhttp.responseText;
  document.getElementById("test").innerHTML=htmldata;

}
};
request.send(null); 
