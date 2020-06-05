$(document).ready(function(){
  $("form#test").submit(function(event){
    const name = $("#name").val();
    const age = parseInt($("#age").val());
    const interest = $("#interests").val();
    const company = $("#company").val();
    const radioAnswer = $("input:radio[name=robot-human]:checked").val();
    const color = $("#color").val();
    
    event.preventDefault();
  })

});