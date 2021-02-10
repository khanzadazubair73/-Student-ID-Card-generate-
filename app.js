function generateCard() {
    // Get value of Student name from form input 
    const nameElement = document.getElementById("name");
    const nameValue = nameElement.value; 
    const name1Element = document.getElementById("name1");
    const name1Value = name1Element.value; 
    // Assign the value of student name to generated card
    const cardNameElement = document.getElementById("cardName");
    cardNameElement.innerHTML = nameValue;

    const cardName1Element = document.getElementById("Name1");
    cardName1Element.innerHTML = name1Value;

    // Get value of college name from form input 
    const collegeNameValue = document.getElementById("collegeName").value;
    // Assign the value of college name to generated card
    document.getElementById("cardCollegeName").innerHTML = collegeNameValue;

    // Get value of location name from form input 
    const fatherValue = document.getElementById("father").value;
    // Assign the value of location name to generated card
    document.getElementById("cardfather").innerHTML = fatherValue;

    // Get value of location name from form input 
    const classValue = document.getElementById("class").value;
    // Assign the value of location name to generated card
    document.getElementById("cardClass").innerHTML = classValue;


    // Display final generated card to user     
    document.getElementById("collegeCard").style.display = "block";
}