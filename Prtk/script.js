var html_content,css_content,js_content;
var count_control=0;
var map={};

window.addEventListener("load", function() {
  	
  	document.getElementById("file-upload-html").onchange = function(event)
  	{
	    var reader = new FileReader();
	    reader.readAsText(event.srcElement.files[0]);
	    var me = this;
	    console.log("Event is working");
	    reader.onload = function () {
	      var fileContent = reader.result;
	      html_content=fileContent;
		  console.log(html_content);
    	}
	}
	
	document.getElementById("file-upload-css").onchange = function(event) {
	    var reader = new FileReader();
	    reader.readAsText(event.srcElement.files[0]);
	    var me = this;
	    console.log("Event is working");
	    reader.onload = function () {
	      var fileContent = reader.result;
	      css_content=fileContent;
		  console.log(css_content);
	    }
	}
	
	document.getElementById("file-upload-js").onchange = function(event) {
	    var reader = new FileReader();
	    reader.readAsText(event.srcElement.files[0]);
	    var me = this;
	    console.log("Event is working");
	    reader.onload = function () {
	      var fileContent = reader.result;
	      js_content=fileContent;
		  console.log(js_content);
    	}
	}
});

function addControl()
{
	count_control+=1;
	var g = document.createElement('div');
	g.setAttribute("id","field"+count_control);
	g.setAttribute("class","inputField");
	var phone = document.createElement("INPUT");
	phone.setAttribute("type", "text");
	phone.setAttribute("value", "Phone");
	var desktop = document.createElement("INPUT");
	desktop.setAttribute("type", "text");
	desktop.setAttribute("value", "Desktop");
	phone.setAttribute("id","phone"+count_control);
	desktop.setAttribute("id","desktop"+count_control);
	phone.onclick=function(){
		phone.value="";
	}
	desktop.onclick=function(){
		desktop.value="";
	}
	g.appendChild(phone);
	g.appendChild(desktop);
	var parent=document.getElementById("inputControl");
	parent.appendChild(g);
}

function mappy()
{
	for(var i=1;i<=count_control;i+=1)
	{
		var t="desktop"+i;
		var temp=document.getElementById(t).value;
		var d="phone"+i;
		map[temp]=document.getElementById(d).value
	}	
}

function download()
{
	let zip = new JSZip();
	zip.file("prtk.txt", `PMID:29651880\r\nPMID:29303721`);
	zip.generateAsync({type: "blob"}).then(function(content) {
  	saveAs(content, "download.zip");
});
}