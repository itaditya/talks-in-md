type Person = {
  name: string;
};

function getAdminName(admin: Person) {
  return admin.name;
}

const aditya: Person = {
  name: 'Aditya',
};
const myName = getAdminName(aditya);
myName.includes('ty');
