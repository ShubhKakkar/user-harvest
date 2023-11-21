# User Harvest

User Harvest is a Node.js package that enables you to generate random user data, including names, email addresses, birthdates, occupations, and profile pictures. It fetches profile pictures from Unsplash based on the specified gender.

## Table of Contents

- [User Harvest](#user-harvest)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Clone the repository:](#clone-the-repository)
  - [Usage](#usage)
  - [Current Version: 1.0.1](#current-version-101)
    - [Release Date: 22-11-2023(IST)](#release-date-22-11-2023ist)

## Installation

To install User Harvest, follow these steps:

## Clone the repository:

```bash
git clone https://github.com/ShubhKakkar/user-harvest.git
```
a. Navigate to the project directory:

```bash
cd user-harvest
```

b. Install the required dependencies:

```bash
npm install
```

## Usage
Generate Random User Data
To generate random user data, you can use the generateRandomUser function provided by the package. Here's an example of how to use it:

```javascript
const generateRandomUser = require('user-harvest');

// Specify the gender and limit
generateRandomUser('male', 5).then((result) => {
    console.log(result);
});
```

Note:

The gender can be either "male" or "female."
The limit specifies the number of user profiles to generate, with a maximum limit of 100.
User Object Structure
The generated user object includes the following fields:

fullName: Full name of the user.
username: Unique username.
password: Randomly generated password.
email: Randomly generated email address.
birthDate: Randomly generated birthdate.
occupation: Randomly selected occupation.
profilePicture: URL of the profile picture fetched from Unsplash.
Features
Generates random user data with customizable gender and limit.
Fetches profile pictures from Unsplash for a realistic touch.
Provides a variety of user data fields.
Examples
Here are some additional examples of how to use User Harvest:

```javascript
// Generate 3 female user profiles
const femaleUsers = await generateRandomUser('female', 3);
console.log(femaleUsers);
```

```javascript
// Generate 10 male user profiles
const maleUsers = await generateRandomUser('male', 10);
console.log(maleUsers);
```

Contributing
Contributions are welcome! Follow the Contribution Guidelines when making contributions to this project.

License
This project is licensed under the GNU AFFERO GENERAL PUBLIC LICENSE - see the LICENSE file for details.


Feel free to use or modify this version according to your needs!

## Current Version: 1.0.1
### Release Date: 22-11-2023(IST)