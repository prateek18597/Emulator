var html_content,css_content,js_content;
var count_control=0;


window.addEventListener("load", function() {
  	console.log("Event is working");
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
	var d1 = document.createElement('div');
	var d2 = document.createElement('div');
	var phone = document.createElement("INPUT");
	phone.setAttribute("type", "text");
	phone.setAttribute("value", "Phone Key");
	var desktop = document.createElement("INPUT");
	desktop.setAttribute("type", "text");
	desktop.setAttribute("value", "Desktop Key");
	phone.setAttribute("id","phone"+count_control);
	desktop.setAttribute("id","desktop"+count_control);
	phone.onclick=function(){
		phone.value="";
	}
	desktop.onclick=function(){
		desktop.value="";
	}
	d1.appendChild(phone);
	d2.appendChild(desktop);
	g.appendChild(d1);
	g.appendChild(d2);
	
	var parent=document.getElementById("inputControl");
	parent.appendChild(g);
}
