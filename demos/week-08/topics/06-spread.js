// NOTE: Please check the videos for how copy happens when the array/ object has objects/arrays within
// spread -> ... (overloaded with "rest")

// use case 1 (spread) -> merging arrays
// copy / merge objects and arrays
const nums1 = [1, 2, 3], nums2 = [4, 5, 6];

const nums3 = [...nums1, ...nums2]; // [ nums1[0], nums1[1], nums1[2], nums2[0], nums2[1], nums2[2] ]
console.log(nums3);

// use case 2 (spread) -> merging objects
const john = {
    name: 'John',
    age: 32
};

const johnEmployment = {
    name: 'Jonathan',
    companyName: 'Example Consulting',
    role: 'Fullstack Developer'
};

const johnMasterDetails = {
    ...john, // name: john.name, age: john.age
    ...johnEmployment, // name: johnEmployment.name, ...
    spouse: 'Jane',
};

console.log(johnMasterDetails);