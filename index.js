const axios = require("axios");
const maleNames = require("./data/maleNames");
const femaleNames = require("./data/femaleNames");
const passwords = require("./data/passwords");
const mailDomains = require("./data/mailDomains");
const occupations = require("./data/occupations");

const generateRandomEmail = (name, domainList, usedEmails) => {
  const domain = domainList[Math.floor(Math.random() * domainList.length)];
  let email = `${name.toLowerCase().replace(/\s/g, "_")}@${domain}`;

  // Ensure email uniqueness
  while (usedEmails.has(email)) {
    email = `${name.toLowerCase().replace(/\s/g, "_")}@${domain}`;
  }

  usedEmails.add(email);
  return email;
};

const generateRandomBirthDate = () => {
  const currentDate = new Date();
  const maxBirthDate = new Date(
    currentDate.getFullYear() - 15,
    currentDate.getMonth(),
    currentDate.getDate()
  );
  const minBirthDate = new Date(
    currentDate.getFullYear() - 115,
    currentDate.getMonth(),
    currentDate.getDate()
  );

  const randomBirthDate = new Date(
    minBirthDate.getTime() +
      Math.random() * (maxBirthDate.getTime() - minBirthDate.getTime())
  );

  return randomBirthDate.toISOString().split("T")[0];
};

const generateRandomOccupation = () => {
  return occupations[Math.floor(Math.random() * occupations.length)];
};

const getRandomImage = async (gender) => {
  try {
    const response = await axios.get(
      `https://source.unsplash.com/200x200/?${gender}`
    );
    return response.request.res.responseUrl;
  } catch (error) {
    console.error(`Error fetching image for ${gender}: ${error.message}`);
    // You can provide a default image URL or handle the error as needed
    return "https://example.com/default-image.jpg";
  }
};

const generateRandomUser = async (gender, limit) => {
  try {
    let names;
    if (gender === "male") {
      names = maleNames;
    } else if (gender === "female") {
      names = femaleNames;
    } else {
      throw new Error("Please enter a valid gender");
    }

    if (limit > 100) {
      throw new Error("Maximum limit 100");
    }

    const usedEmails = new Set();
    const users = [];

    for (let i = 0; i < Math.min(limit, 30); i++) {
      const fullName = names[Math.floor(Math.random() * names.length)];
      const username = `${fullName
        .toLowerCase()
        .replace(/\s/g, "_")}_${Math.floor(Math.random() * 100)}`;
      const password = passwords[Math.floor(Math.random() * passwords.length)];
      const email = generateRandomEmail(fullName, mailDomains, usedEmails);
      const birthDate = generateRandomBirthDate();
      const occupation = generateRandomOccupation();
      const profilePicture = await getRandomImage(gender);

      users.push({
        fullName,
        username,
        password,
        email,
        birthDate,
        occupation,
        profilePicture,
      });
    }

    return users;
  } catch (error) {
    console.error(`Error generating random user: ${error.message}`);
    // You may want to log the error or handle it in a way appropriate for your application
    return null;
  }
};

module.exports = generateRandomUser;