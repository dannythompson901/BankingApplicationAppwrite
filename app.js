import { Client, Account, ID } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('64ed48278fdff2ec2135');

const account = new Account(client);

const formData = {
  name: '',
  email: '',
  password: '',
};

const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  formData[name] = value;
};

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(formData);
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

document.getElementById('name').addEventListener('input', handleChange);
document.getElementById('email').addEventListener('input', handleChange);
document.getElementById('password').addEventListener('input', handleChange);
document.getElementById('signupForm').addEventListener('submit', handleSubmit);
