var formgroup = '<div class="form-group"><label class="control-label" for="%id%">%name%</label> <input class="form-control" id="%id%" name="%name%" placeholder="%pholder%" title="" type="text" required /></div>';
var dategroup = '<div class="form-group"><div class="input-group date" id="%id%"><input type="text" class="form-control" /><span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span></div></div>'
var evidenceblock = '<div id="eblock%ecount%"><div class="panel panel-default" style="border:1px solid black; font-family:Work Sans"><div class="panel-heading" role="tab" id="heading%ecount%"><h4><span>Evidence</span><button type="button"class="btn btn-default pull-right" data-toggle="collapse" data-target="#bodyid%ecount%" aria-expanded="false" aria-controls="Minimize"><i class="fa fa-minus" aria-hidden="true"></i></button></h4></div><div id="#bodyid%ecount%" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading%ecount%"><div class="panel-body" style="padding-left: 2em; font-family:Work Sans; font-size: 21px; font-weight: 200"><div id="autoformevd%ecount%"></div><button type="button" class="btn btn-lg btn-danger removeEvd" aria-expanded="false" aria-controls="remove evidence"><i class="fa fa-window-close fa-lg" aria-hidden="true"></i> Remove evidence</button> <button type="button"class="btn btn-lg btn-primary btnEvd" aria-expanded="false" aria-controls="addMore"><i class="fa fa-plus-circle fa-lg" aria-hidden="true"></i> Add more evidence</button></div></div></div></div>'
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


function saveform(dictionary) {
  for (var fgroup in dictionary) {
    dictionary[fgroup]["var"] = $("#"+dictionary[fgroup]["id"]).val();
    $("." + dictionary[fgroup]["id"]+"print").each(function(){
      $(this).text(function(){
        return $(this).text().replace(/%text%/, dictionary[fgroup]["var"]);
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


var repintroduction = {
  "date1":{
      "id":"date1",
      "name":"Todays Date",
      "pholder":"YYYY-MM-DD",
      "widget":"date"},
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
      "pholder": "123 Main Street"},
  "lcity":{
      "id":"lcity",
      "name":"Your Landlords City of Residence",
      "pholder":"Cityville"},
  "lpostal":{
      "id":"lpostal",
      "name": "Your Landlords Postal Code",
      "pholder":"V5Y1J2"},
  "idate":{
      "id":"idate",
      "name": "Date the issue started",
      "pholder": "YYYY-MM-DD",
      "widget": "date"},
  "issuesummary":{
      "id":"issuesummary",
      "name":"Issue summary",
      "pholder": "Brief summary of the issue, in complete sentences. The sink was broken.",
      "widget": "textarea"},
  "ldate":{
      "id":"ldate",
      "name": "Date letter was sent to landlord",
      "pholder": "MM/DD/YYYY",
      "widget": "date"},
  "ddate":{
      "id":"ddate",
      "name": "Deadline Given Landlord for Completion of Repairs",
      "pholder": "MM/DD/YYYY",
      "widget": "date"},
  };
var repbackground = {
  "bckground":{
    "id": "bckground",
    "name":"Background",
    "pholder":"Provide any additional background you'd like to add to this complaint. You can leave this blank. Be specific and give dates. Less is usually more.",
    "widget":"textarea"},
  "impact":{
    "id":"impact",
    "name":"Impact",
    "pholder":"In a few short sentences describe how your landlord's neglegence has negatively effected you. These impacts can be physical, mental, or financial. Be as specific as possible and give dates and full names of witnesses wherever possible.",
    "widget":"textarea"}
  };
var evidence = {
  "edate":{
    "id": "edate",
    "name":"Evidence Time Stamp",
    "pholder":"YYYY-MM-DD",
    "widget":"date"},
  "ename":{
    "id":"ename",
    "name":"Name",
    "pholder":"Name this piece of evidence"},
  "eindex":{
    "id":"eindex",
    "name":"Index Number",
    "pholder":"The associated index number of the evidence in your evidence submission index"},
  "edesc":{
    "id":"edesc",
    "name":"Description",
    "pholder":"A short description of the evidence that includes its signifcance. E.g A photo of the flooding damage caused by the leaking sink",
    "widget":"textarea"}
};
var repconclusion = {
  "damages":{
    "id":"damages",
    "name":"Damages",
    "pholder":"Amount of money you are asking to get re-imbursed for. If you are asking for money back you should submit a Monetary order worksheet (http://www2.gov.bc.ca/assets/gov/housing-and-tenancy/residential-tenancies/forms/rtb21.pdf)"
  }
};
