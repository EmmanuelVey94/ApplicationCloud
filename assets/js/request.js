
function requetes1() { 

    input = document.getElementById("input1").value;
    textarea = document.getElementById("reponse1");
    //textarea.value = "{\n\t\"emp_no\" : "+ input +",\n\t\"birthe_date\" : 18/03/1997,\n\t\"first_name\" : Jean,\n\t\"last_name\" : Dupond\n}";      

    var request = new XMLHttpRequest()
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1ezd' +'?'+input, true)
    request.onload = function() {
      // Begin accessing JSON data here

        if (request.status >= 200 && request.status < 400) {
            textarea.value = this.response;
        } else {
            textarea.value = "Bad status : "+ request.statusText ;                
        }
    }
    request.send()
}
function requetes2() { 

    input = document.getElementById("input2").value;
    textarea = document.getElementById("reponse2");
    //textarea.value = "{\n\t\"emp_no\" : d25632,\n\t\"birthe_date\" : 18/03/1997,\n\t\"first_name\" : Jean,\n\t\"last_name\" : Dupond\n}\n{\n\t\"emp_no\" : d35896,\n\t\"birthe_date\" : 04/06/1958,\n\t\"first_name\" : Maurice,\n\t\"last_name\" : Vangre\n}";
    var request = new XMLHttpRequest()
    request.open('GET', 'http://localhost:8080/api/endpoint2/:'+input, true)
    request.onload = function() {
      // Begin accessing JSON data here
        var data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            textarea.value = data;
        } else {
            textarea.value = "Bad status : "+ request.statusText ;
        }
    }
    request.send()
}
function requetes3() { 

    input = document.getElementById("input3").value;
    textarea = document.getElementById("reponse3");

    var request = new XMLHttpRequest()
    request.open('GET', 'localhost:8080/api/endpoint3/:'+input, true)
    request.onload = function() {
      // Begin accessing JSON data here
        var data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            textarea.value = data;
        } else {
            textarea.value = "Bad status : "+ request.statusText ;
        }
    }
    request.send()
}
function requetes4() { 

    input = document.getElementById("input3").value;
    textarea = document.getElementById("reponse4");

    var request = new XMLHttpRequest()
    request.open('GET', 'localhost:8080/api/endpoint4/:'+input, true)
    request.onload = function() {
      // Begin accessing JSON data here
        var data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            textarea.value = data;
        } else {
            textarea.value = "Bad status : "+ request.statusText ;
        }
    }
    request.send()
}
function requetes5() { 

    textarea = document.getElementById("reponse5");

    var request = new XMLHttpRequest()
    request.open('GET', 'localhost:8080/api/endpoint5', true)
    request.onload = function() {
      // Begin accessing JSON data here
        var data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            textarea.value = data;
        } else {
            textarea.value = "Bad status : "+ request.statusText ;
        }
    }
    request.send()
}
function requetes6() { 

    textarea = document.getElementById("reponse6");

    var request = new XMLHttpRequest()
    request.open('GET', 'localhost:8080/api/endpoint6', true)
    request.onload = function() {
      // Begin accessing JSON data here
        var data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            textarea.value = data;
        } else {
            textarea.value = "Bad status : "+ request.statusText ;
        }
    }
    request.send()
}
function requetes7() { 

    textarea = document.getElementById("reponse7");

    var request = new XMLHttpRequest()
    request.open('GET', 'localhost:8080/api/endpoint7', true)
    request.onload = function() {
      // Begin accessing JSON data here
        var data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            textarea.value = data;
        } else {
            textarea.value = "Bad status : "+ request.statusText ;
        }
    }
    request.send()
}


