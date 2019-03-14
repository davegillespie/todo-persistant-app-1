$(() => {
  // const recordId = '';
  const BASE_ID = '';
  const Airtable = {
    API_KEY: '',
    API: `https://api.airtable.com/v0/${Base_ID}`,
  };

  $.get({
    url: `${Airtable.API}/To%20Do`,
    headers: {
      authorization: `Bearer ${Airtable.API_KEY}`
    },
  }).fail((error) => {
    console.error('There was an error fetching the data:', error);
  }).done((response) => {
    response.records.forEach((toDoItem) => {
        let listItem = $('<div class="list-item" />');
        $('#toDoList').append(listItem);
        $(listItem).append(`<div><strong>Name: </strong>${toDoItem.fields.Name}</div>`);
        $(listItem).append(`<div><strong>Notes: </strong>${toDoItem.fields.Notes}</div>`);
        $(listItem).append(`<div><strong>Done?: </strong><span>${toDoItem.fields.Done} </span></div>`);
    })
  });

  function submit() {
    console.log($('#toDoNameInput').val());
    console.log($('#toDoNotesInput').val());
    console.log($('#toDoDoneInput').val());

    $.post({
      url: `${Airtable.API}/To%20Do`,
      headers: {
        authorization: `Bearer ${Airtable.API_KEY}`,
        contentType: "application/json"
      },
      data: {
        "fields": {
          "Name": $('#toDoNameInput').val(),
          "Notes": $('#toDoNotesInput').val(),
          "Done": $('#toDoDoneSelect').val(),
        }
      }
    })
    .fail((error) => {
        console.error("There was an error processing your request:", error.responseText);
    })
    .done((response) => {
        console.log(response);
    });
  }

  // TODO
  function update() {
    $.ajax({
      url: `${Airtable.API}/To%20Do/${recordId}`,
      type: 'PATCH',
      headers: {
        authorization: `Bearer ${Airtable.API_KEY}`,
        contentType: "application/json",
      },
      data: {
        "fields": {
          "Done": "Yes"
        }
      }
    })
      .fail((error) => {
        console.error("There was an error processing your request:", error, error.responseText);
      })
      .done((response) => {
        console.log(response);
      });
  }

  $('#btnSubmit').on('click', submit);
});