$(() => {
  const BASE_ID = 'appi1FL0OGHQhpNch'; // TODO Put your Base ID here
  const Airtable = {
    API_KEY: 'keyJoKj5WYck1QODK',  // TODO Put your API_KEY here
    API: `https://api.airtable.com/v0/${BASE_ID}`,
  };


  // Start your $.get here
    // on fail, console.error out the error you recieve
    // on done, log out each individual response

$.get({
  headers: {
    authorization: `Bearer ${Airtable.API_KEY}`
  },
    url: `${Airtable.API}/To%20Do`
  }).fail((error) => {        // on fail, console.error out the error you recieve
      console.log(error);

  }).done((response) => {    // on done, log out the response
    console.log(response);
    console.log("cool, it's working...ish.");
});


  function submit() {
    console.log($('#toDoNameInput').val());
    console.log($('#toDoNotesInput').val());
    console.log($('#toDoDoneSelect option:selected').text());
    $.ajax({
      headers: {
        authorization: `Bearer ${Airtable.API_KEY}`,
        contentType: "application/json",
      },
      url: `${Airtable.API}/To%20Do`,
      data: {
        "fields": {
          "Name": $('#toDoNameInput').val(),
          "Notes": $('#toDoNotesInput').val(),
          "Done": $('#toDoDoneSelect option:selected').text(),
        },
      },
      method: "POST"
  });

}
    // Start your $.post here
    $('#btnSubmit').on('click', submit);
});
