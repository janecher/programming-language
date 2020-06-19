$(document).ready(function(){
  $("form#test").submit(function(event){
    const name = $("#name").val();
    const age = parseInt($("#age").val());
    const interest = $("#interests").val();
    const company = $("#company").val();
    const radioAnswer = $("input:radio[name=robot-human]:checked").val();
    const color = $("#color").val();
    let answer;

    if(interest === "3"){
      answer = "HTML & CSS";
    }
    else if (interest === "4"){
      answer = "JavaScript";
    }
    else if(company === "Microsoft" || interest === "2" || radioAnswer === "robot"){
      answer = "C# / C++";
    }
    else if(interest === "1" && (company === "Google" || company === "Facebook")){
      answer = "Python";
    }
    else{
      answer = "JavaScript";
    }

    $("span#hero").text(name);
    $("span#answer").text(answer);
    $(".buddy").css("color", color);

    if(answer === "Python"){
      $("#lang-img").attr("src","images/python.png");
    }
    else if(answer === "JavaScript"){
      $("#lang-img").attr("src","images/javascript.png");
    }
    else if(answer === "C# / C++"){
      $("#lang-img").attr("src","images/c_sharp.png");
    }
    else if(answer === "HTML & CSS"){
      $("#lang-img").attr("src","images/html_css.png");
    }

    $(".main").hide();
    $(".answer").show();

    event.preventDefault();
  });

  $("#return-to-test").click(function(){
    $("form#test")[0].reset();
    $(".answer").hide();
    $(".main").show();
  });
});