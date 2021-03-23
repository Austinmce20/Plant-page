console.log("Yes");


// Making an AJAX server request
var serverRequest = new XMLHttpRequest();
serverRequest.onreadystatechange = function() {
    // Running the functions that create the body of text
    if (this.readyState == 4 && this.status == 200) {
        cactiFunction(this);
    }
};
//Requesting information from the server. 
//In this case, the plants.xml file
serverRequest.open("GET", "plants.xml", true);
serverRequest.send();




//Create the contents within the Cacti body
function cactiFunction(xml) {
    // Creating a JS object with the XML doc
    var xmlDoc = xml.responseXML
    //Targeting XML elements to create variables
    var species = xmlDoc.getElementsByTagName('species');
    var commonName = xmlDoc.getElementsByTagName('commonName');
    //Creating variables out of specific instances of elements 
    var y = species[0].childNodes[0].nodeValue
    var z = commonName[0].childNodes[0].nodeValue

    var speciesHeading = document.createElement("h3");
    var speciesHeadingNode = document.createTextNode(y);
    speciesHeading.appendChild(speciesHeadingNode);
    var element = document.getElementById("cacti-heading");
    element.appendChild(speciesHeading);
    
    document.getElementById('cacti-placeholder').innerHTML = z;
}



