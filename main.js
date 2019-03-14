$(() => {
  const BASE_ID = ''; // TODO Put your Base ID here 
  const Airtable = {
    API_KEY: '',  // TODO Put your API_KEY here
    API: `https://api.airtable.com/v0/${BASE_ID}`,
  };


  // Start your $.get here
    // on fail, console.error out the error you recieve
    // on done, log out each individual response

  function submit() {
    console.log($('#toDoNameInput').val());
    console.log($('#toDoNotesInput').val());
    console.log($('#toDoDoneInput').val());

    // Start your $.post here
      // on fail, console.error out the error you recieve
      // on done, log out the response
  }
  
  $('#btnSubmit').on('click', submit);
});