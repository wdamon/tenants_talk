var formgroup = '<div class="form-group"><label class="control-label" for="%id%">%name%</label> <input class="form-control" id="%id%" name="%name%" placeholder="%pholder%" title="" type="text" required /></div>';
var jscript1 = 'var date = $("%id%").val();';
var jscript2 =  '$("%printid%").append(date);';

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
  }

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

}

function populateform(dictionary) {
  for (var fgroup in dictionary) {
    dictionary[fgroup]["var"] = $("#"+dictionary[fgroup]["id"]).val();
    $("." + dictionary[fgroup]["id"]+"print").each(function(){
      $(this).text(function(){
        return $(this).text().replace(/%text%/, dictionary[fgroup]["var"]);
      });
    });
  }
}



var repintroduction = {
  "tdate":{
    "id":"tdate",
    "name":"Todays date",
    "pholder":"MM/DD/YYYY"},
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
      "name": "Your Postal Code",
      "pholder":"V5Y1J2"},
  "idate":{
      "id":"idate",
      "name": "Date the issue started",
      "pholder": "MM/DD/YYYY"},
  "issuesummaryprint":{
      "id":"issuesummaryprint",
      "name":"Issue summary",
      "pholder": "Brief summary of the issue, in complete sentences. The sink was broken."},
  "ldate":{
      "id":"ldate",
      "name": "Date letter was sent to landlord",
      "pholder": "MM/DD/YYYY"},
  "ddate":{
      "id":"ddate",
      "name": "Deadline Given Landlord for Completion of Repairs",
      "pholder": "MM/DD/YYYY"},
  "repairs":{
      "id": "repairs",
      "name":"Description of Repairs",
      "pholder":"Descriptive List of Repairs. Please use complete sentences. For instance, 'The upstairs sink is leaking.'"}
}
var repbackground = {
  "bckground":{
    "id": "bckground",
    "name":"Background",
    "pholder":"Provide any additional background you'd like to add to this complaint. You can leave this blank. Be specific and give dates. Less is usually more. "},
  "impact":{
    "id":"impact",
    "name":"Impact",
    "pholder":"In a few short sentences describe how your landlord's neglegence has negatively effected you. These impacts can be physical, mental, or financial. Be as specific as possible and give dates and full names of witnesses wherever possible."}
  }
var evidence = {
  "edate":{
    "id": "edate",
    "name":"Evidence Time Stap",
    "pholder":""},
}
repconclusion = {
  "damages":{
    "id":"damages",
    "name":"Damages",
    "pholder":"Amount of money you are asking to get re-imbursed for. If you are asking for money back you should submit a Monetary order worksheet (http://www2.gov.bc.ca/assets/gov/housing-and-tenancy/residential-tenancies/forms/rtb21.pdf)"
  }
}
