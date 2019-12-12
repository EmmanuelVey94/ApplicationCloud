
function requetes1() { 

    input = document.getElementById("input1").value;
    textarea = document.getElementById("reponse1");

    var request = new XMLHttpRequest()
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true)
    request.onload = function() {
      // Begin accessing JSON data here

        if (request.status >= 200 && request.status < 400) {
            textarea.value = this.response;
        } else {
            textarea.value = `Gah, it's not working!`
        }
    }
    request.send()
}
function requetes2() { 

    input = document.getElementById("input2").value;
    textarea = document.getElementById("reponse2");

    var request = new XMLHttpRequest()
    request.open('GET', 'localhost:8080/api/endpoint2', true)
    request.onload = function() {
      // Begin accessing JSON data here
        var data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            textarea.value = data;
        } else {
            textarea.value = `Gah, it's not working!`
        }
    }
    request.send()
}
function requetes3() { 

    input = document.getElementById("input3").value;
    textarea = document.getElementById("reponse3");

    var request = new XMLHttpRequest()
    request.open('GET', 'localhost:8080/api/endpoint3', true)
    request.onload = function() {
      // Begin accessing JSON data here
        var data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            textarea.value = data;
        } else {
            textarea.value = `Gah, it's not working!`
        }
    }
    request.send()
}
function requetes4() { 

    input = document.getElementById("input3").value;
    textarea = document.getElementById("reponse4");

    var request = new XMLHttpRequest()
    request.open('GET', 'localhost:8080/api/endpoint4', true)
    request.onload = function() {
      // Begin accessing JSON data here
        var data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            textarea.value = data;
        } else {
            textarea.value = `Gah, it's not working!`
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
            textarea.value = `Gah, it's not working!`
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
            textarea.value = `Gah, it's not working!`
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
            textarea.value = `Gah, it's not working!`
        }
    }
    request.send()
}


