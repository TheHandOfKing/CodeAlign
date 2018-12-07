var countryNiz =["England", "France", "Germany", "Serbia", "Taured","Spain","Nicaragua","Honduras","USA","Canada","Philippines","Greece","Portugal","Netherlands","Russia","Egypt","Rome"];
for(i=0; i<countryNiz.length;i++){
    document.getElementById("countrySelect").innerHTML += "<option>" + countryNiz[i] + "</option>";
}
$(document).ready(function(){
var regeExEmail =/^\w+([\.-]\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
var usernameRegex = /^([a-zA-Z]{3,16})$/;
var companyNameRegex =/^[a-zA-Z]{2,}[\w.\-#&\s]*$/;
$('#testName').on('keypress keydown keyup',function(){
    if (!$(this).val().match(usernameRegex)) {
        $('#paraName').removeClass('hidden');
        $('#paraName').show();
    }
  else{
       $('#paraName').addClass('hidden');
      }
});
$('#testEmailUser').on('keypress keydown keyup',function(){
    if (!$(this).val().match(regeExEmail)) {
        $('#paraEmailUser').removeClass('hidden');
        $('#paraEmailUser').show();
    }
  else{
       $('#paraEmailUser').addClass('hidden');
      }
});
$('#testCompany').on('keypress keydown keyup',function(){
    if (!$(this).val().match(companyNameRegex)) {
        $('#paraCompany').removeClass('hidden');
        $('#paraCompany').show();
    }
  else{
       $('#paraCompany').addClass('hidden');
      }
});

$('#testLname').on('keypress keydown keyup',function(){
    if($(this).val() == $('#testName').val()){
         $('#paraLname').removeClass('hidden');
         $('#paraLname').show();
     }
   else{
        $('#paraLname').addClass('hidden');
       }
});

$('#testEmailCompany').on('keypress keydown keyup',function(){
    if (!$(this).val().match(regeExEmail)) {
        $('#paraEmailCompany').removeClass('hidden');
        $('#paraEmailCompany').show();
    }
  else{
       $('#paraEmailCompany').addClass('hidden');
      }
});

$('#checkboxSubmit input[type=checkbox]').click(function () {
    if ($(this).is(':checked')) {

        $('#checkboxSubmit input[type=submit]').removeAttr('disabled').css("background-color", "#ff7b39"); //enable input
    } else {
        $('#checkboxSubmit input[type=submit]').attr('disabled', true).css("background-color", "gray"); //disable input
    }
});
});

