import { Client, Account, ID } from 'appwrite';

const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('project_ID');

const account = new Account(client);

// Initial form data
const formData = {
  name: '',
  email: '',
  password: '',
};

// Handle input change
const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  formData[name] = value;
};

// Handle form submit
const handleSubmit = (event) => {
  event.preventDefault();
  console.log(formData);
  // Add your submit logic here, such as sending the form data to a server
  account
    .create(ID.unique(), formData.email, formData.password, formData.name)
    .then(
      function (response) {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );
};

// Attach event listeners to the form elements
document.getElementById('name').addEventListener('input', handleChange);
document.getElementById('email').addEventListener('input', handleChange);
document.getElementById('password').addEventListener('input', handleChange);
document.getElementById('signupForm').addEventListener('submit', handleSubmit);
