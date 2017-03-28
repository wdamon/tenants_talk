var formgroup = '<div class="form-group"><label class="control-label" for="%id%">%name%</label> <input class="form-control" id="%id%" name="%name%" placeholder="%pholder%" title="" type="text" required /></div>';
var dategroup = '<div class="form-group"><div class="input-group date" id="%id%"><input type="text" class="form-control" /><span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span></div></div>'
var evidenceblock = `<div id="eblock%ecount%"><div class="panel panel-default" style="border:1px solid black; font-family:Work Sans"><div class="panel-heading" role="tab" id="heading%ecount%"><h4><span>Evidence</span><button type="button"class="btn btn-default pull-right" data-toggle="collapse" data-target="bodyid%ecount%" aria-expanded="false" aria-controls="Minimize"><i class="fa fa-minus" aria-hidden="true"></i></button></h4></div><div id="bodyid%ecount%" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading%ecount%"><div class="panel-body" style="padding-left: 2em; font-family:Work Sans; font-size: 21px; font-weight: 200"><div id="autoformevd%ecount%"></div><button type="button" class="btn btn-lg btn-danger removeEvd" id = "%ecount%" aria-expanded="false" aria-controls="remove evidence"><i class="fa fa-window-close fa-lg" aria-hidden="true"></i> Remove evidence</button> <button type="button"class="btn btn-lg btn-primary btnEvd" aria-expanded="false" aria-controls="addMore"><i class="fa fa-plus-circle fa-lg" aria-hidden="true"></i> Add more evidence</button></div></div></div></div>`
var evidenceletterblock = '<div id="evidenceLetter%ecount%"><h1>#<div class="eindex%ecount%print">%eindex%ecount%print%</div></h1><br/><hr/><br/><h2>Date:<div class="edate%ecount%print">%edate%ecount%print%</div></h2><br/><h2>Name:<div class="ename%ecount%print">%ename%ecount%print%</div></h2><br/><br/><hr/></div>'

function textareafy(fgroup, col, row) {
  $input = $("#"+fgroup["id"]);
  $textarea = $("<textarea></textarea>").attr({
    class: 'form-control',
    id: $input.attr('id'),
    name: $input.attr('name'),
    placeholder: fgroup["pholder"],
    cols: col,
    rows: row
  });
  $input.after($textarea).remove();
};

function dateafy(fgroup) {
  $input = $("#"+fgroup["id"])
  formatteddate = dategroup.replace(/%id%/g, fgroup["id"]);
  $input.after(formatteddate).remove();
  $("#"+fgroup["id"]).datetimepicker({format: 'YYYY-MM-DD'});
};

function formFilled(dictionaries) {
  var output = false;
  for (var dictionary in dictionaries) {
    for (var fgroup in dictionaries[dictionary]) {
      if (dictionaries[dictionary][fgroup]["widget"] === "date") {
        if ($("#"+dictionaries[dictionary][fgroup]["id"]).children().val().length > 0 === true) {
          output = true;
        } else {
          console.log($("#"+dictionaries[dictionary][fgroup]["id"]))
        }
      } else {
        if ($("#"+dictionaries[dictionary][fgroup]["id"]).val().length > 0 === true) {
          output = true;
        } else {
            console.log(dictionaries[dictionary][fgroup]["id"])
        }
        }
      }
    return output;
    }
  return output;
}


function saveform(dictionary) {
  for (var fgroup in dictionary) {
    if (dictionary[fgroup]["widget"] === "date") {
      dictionary[fgroup]["var"] = $("#"+dictionary[fgroup]["id"]).children().val();
    } else {
      dictionary[fgroup]["var"] = $("#"+dictionary[fgroup]["id"]).val();
    }
    var re = new RegExp("%" + dictionary[fgroup]["id"]+"print%")
    $("." + dictionary[fgroup]["id"]+"print").each(function(){
      $(this).text(function(){
      return $(this).text().replace(re, dictionary[fgroup]["var"]);
      });
    });
  }
};

function printform(num, dict) {
  for (var fgroup in dict) {
    formattedgroup = formgroup.replace(/%name%/g, dict[fgroup]["name"]).replace(/%id%/g, dict[fgroup]["id"]).replace(/%pholder%/g, dict[fgroup]["pholder"]);
    $("#auto"+forms[num]).append(formattedgroup);
    if (dict[fgroup]["widget"] === "textarea") {
      textareafy(dict[fgroup], 40, 4)
    } else if (dict[fgroup]["widget"] === "date") {
      dateafy(dict[fgroup])
      }
    }
  };

var repairsdict = {
  "tname":{
    "id":"tname",
    "name":"Your Name",
    "pholder":"Your First and Last Name"},
  "address":{
    "id":"taddress",
    "name":"Your Address",
     "pholder":"123 Main Street"},
  "city":{
    "id":"tcity",
    "name":"Your City of Residence",
    "pholder":"Cityville"},
  "postal":{
    "id":"tpostal",
    "name": "Your Postal Code",
    "pholder":"V5Y1J2"},
  "lname":{
    "id": "lname",
    "name": "Your Landlords Name",
    "pholder": "Jane Doe"},
  "laddress":{
    "id": "laddress",
    "name": "You Landlords Address",
    "pholder": "123 Main Street"
  },
  "lcity":{
    "id":"lcity",
    "name":"Your Landlords City of Residence",
    "pholder":"Cityville"
  },
  "lpostal":{
    "id":"lpostal",
    "name": "Your Postal Code",
    "pholder":"V5Y1J2"
  },
  "repairs":{
    "id": "repairs",
    "name":"Description of Repairs",
    "pholder":"Descriptive List of Repairs. Please use complete sentences. For instance, 'The upstairs sink is leaking.'"
  },
  "rdate":{
    "id":"rdate",
    "name": "Reasonable Date for Completion of Repairs",
    "pholder": "Provide a deadline for the repairs to be finished by."}
  };
