$(document).ready(function(){
  $("form#test").submit(function(event){
    const name = $("#name").val();
    const age = parseInt($("#age").val());
    const interest = $("#interests").val();
    const company = $("#company").val();
    const radioAnswer = $("input:radio[name=robot-human]:checked").val();
    const color = $("#color").val();
    let answer;

    if(!age || age < 0 || age > 150){
      alert("Incorrect age input");
      return;
    }
    if(age < 20){
      answer = "Python";
    }
    else if (company === "Microsoft" || interest === "2"){
      answer = "C#";
    }
    else if(age >= 20 && age < 30){
      if(interest === "1" && (company === "Google" || company === "Facebook")){
        answer = "Python";
      }
      else if(interest === "3" || interest === "4"){
        answer = "JavaScript"
      }
    }
    event.preventDefault();
  })

});