/**
 * Created by yidu on 2014/12/17.
 */
function showProject(){
    $("#cv").hide();
    $("#project").show();
    $("#main").hide();
}

function showMain(){
    $("#cv").hide();
    $("#project").hide();
    $("#main").show();
}

function showCV(){
    $("#cv").show();
    $("#project").hide();
    $("#main").hide();
}

function displayOldProject(){
  $(".oldproj").attr("class", "oldproj collapse in");
  $("#labelHideOldProj").attr("class", "collapse in");
  $("#labelDisplayOldProj").attr("class", "collapse out");
}
function hideOldProject(){
  $(".oldproj").attr("class", "oldproj collapse out");
  $("#labelDisplayOldProj").attr("class", "collapse in");
  $("#labelHideOldProj").attr("class", "collapse out");
}

function displayOldRProject(){
  $(".oldrproj").attr("class", "oldrproj collapse in");
  $("#labelHideOldRProj").attr("class", "collapse in");
  $("#labelDisplayOldRProj").attr("class", "collapse out");
}
function hideOldRProject(){
  $(".oldrproj").attr("class", "oldrproj collapse out");
  $("#labelDisplayOldRProj").attr("class", "collapse in");
  $("#labelHideOldRProj").attr("class", "collapse out");
}

function displayOnlyNewPaper(){
    $(".normalpaper").removeClass("collapse out");
    $(".normalpaper").addClass("collapse in");
    $(".classicpaper").removeClass("collapse in");
    $(".classicpaper").addClass("collapse in");

    $(".oldpaper").removeClass("collapse in");
    $(".oldpaper").addClass("collapse out");
}

function displayOnlyClassicPaper(){
  $(".normalpaper").removeClass("collapse in");
  $(".normalpaper").addClass("collapse out");

  $(".classicpaper").removeClass("collapse out");
  $(".classicpaper").addClass("collapse in");

}

function displayAll(){
  $(".normalpaper").removeClass("collapse out");
  $(".normalpaper").addClass("collapse in");
  $(".classicpaper").removeClass("collapse in");
  $(".classicpaper").addClass("collapse in");
}

function displayCS() {
  $(".normalpaper").removeClass("collapse out");
  $(".normalpaper").addClass("collapse in");
  $(".cspaper").removeClass("collapse in");
  $(".cspaper").addClass("collapse in");
}

function displayM() {
  $(".normalpaper").removeClass("collapse out");
  $(".normalpaper").addClass("collapse in");
  $(".mpaper").removeClass("collapse in");
  $(".mpaper").addClass("collapse in");
}
