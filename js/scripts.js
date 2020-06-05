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
    else{
      if(interest === "3"){
        answer = "HTML & CSS";
      }
      else if (interest === "4"){
        answer = "JavaScript";
      }
      else if(company === "Microsoft" || interest === "2"){
        answer = "C#";
      }
      else if(interest === "1" && (company === "Google" || company === "Facebook")){
        answer = "Python";
      }
      else{
        answer = "JavaScript";
      }

      $("span#hero").text(name);
      $("span#answer").text(answer);

      $(".main").hide();
      $(".answer").show();
    }
    event.preventDefault();
  })

  $("#return-to-test").click(function(){
    $(".answer").hide();
    $(".main").show();
  });

});