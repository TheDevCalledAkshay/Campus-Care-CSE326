


function submitQuery() {
  var name = document.getElementById("name").value;
  var roll = document.getElementById("roll").value;
  var category = document.getElementById("category").value;
  var priority = document.getElementById("priority").value;
  var subject = document.getElementById("subject").value;
  var description = document.getElementById("description").value;

  
  if (name == "" || roll == "" || category == "" || priority == "" || subject == "" || description == "") {
    alert("Please fill all fields");
    return;
  }

  
  document.getElementById("query-message").innerHTML = "Query submitted";

  
  document.getElementById("query-form").reset();
}


function submitContact() {
  var name = document.getElementById("contact-name").value;
  var email = document.getElementById("contact-email").value;
  var message = document.getElementById("contact-message").value;

  
  if (name == "" || email == "" || message == "") {
    alert("Please fill all fields");
    return;
  }

  
  document.getElementById("contact-message-box").innerHTML = "Message submitted";

  
  document.getElementById("contact-form").reset();
}
