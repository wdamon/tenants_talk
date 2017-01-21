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
