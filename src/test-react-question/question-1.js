/**
There is an array, each item has such format:
{firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx',
profession: ‘xxx’}
lastName, note can be empty, customerID can only be a set of digital
numbers.
profession can only have ‘student’, ‘freelancer’, ‘productOwner’,
‘engineer’ or ‘systemAnalytics’.
**/

/**
Q1. Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’)
to sort this array and print it out.
**/

function createUser(firstanme, lastname, customerId, note, profession) {
  const validProfessionArr = [
    "student",
    "freelancer",
    "productOwner",
    "engineer",
    "systemAnalytics",
  ];

  if (
    !firstanme ||
    !Number.isInteger(Number(customerId)) ||
    !validProfessionArr.includes(profession)
  ) {
    console.log("firstname / customrId / profession is incorrect");
    return {};
  }

  return {
    firstanme,
    lastname,
    customerId: Number(customerId),
    note,
    profession,
  };
}

function sortUserName(user) {
  if (!user) return;

  let userArr = user.slice();
  //   console.log(userArr);

  function compareFn(userA, userB) {
    const getCompareStr = (user) =>
      user.firstanme + user.lastname + String(user.customerId);
    if (getCompareStr(userA) < getCompareStr(userB)) {
      return -1;
    } else if (getCompareStr(userA) > getCompareStr(userB)) {
      return 1;
    }
    return 0;
  }

  console.log(userArr.sort(compareFn));
}

const fakeUserArr = [
  createUser("Milton", "Chang", "123", "note", "engineer"),
  createUser("Jack", "Lee", "456", "", "student"),
  createUser("Sarrah", "Tsai", "789", "test", "productOwner"),
  createUser("Betty", "Lin", "134", "", "systemAnalytics"),
];

console.log("\nQ1. answer:");
sortUserName(fakeUserArr);

/**
Q2. Please sort by ‘profession’ to follow the principle.
(‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ >
‘student’’)
**/

function sortByType(user) {
  if (!user) return;

  let userArr = user.slice();
  //   console.log(userArr);

  const priority = {
    systemAnalytics: 0,
    engineer: 1,
    productOwner: 2,
    freelancer: 3,
    student: 4,
  };

  function compareFn(userA, userB) {
    if (priority[userA.profession] < priority[userB.profession]) {
      return -1;
    } else if (priority[userA.profession] > priority[userB.profession]) {
      return 1;
    }
    return 0;
  }
  console.log(userArr.sort(compareFn));
}

console.log("\nQ2. answer:");
sortByType(fakeUserArr);
