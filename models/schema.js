const Chance = require('chance');
const chance = Chance();


const generateProfessionData = (profession, count) => {
  const data = [];
  
  for (let i = 0; i < count; i++) {
    data.push({
        name: `Dr.${chance.name()}`,
        avatar: `http://xsgames.co/randomusers/avatar.php?g=male&name=${encodeURIComponent(chance.name())}`,        
      experience:`${chance.age()} years experience overall`,
      address:`${chance.address()} * Dental Clinic`,
      price:`₹${chance.integer({ min: 200, max: 500 })} Consultation fee at clinic`,
      profession: profession,
     rating: `${chance.integer({ min: 50, max: 100 })}%`,
     story:`${chance.integer({ min: 20, max: 50 })} Patient Stories`
    });
  }
  return data;
};

const dentistData = generateProfessionData('Dentist', 4);
const gynecologistData = generateProfessionData('Gynecologist', 4);
const nutritionistData = generateProfessionData('Nutrition', 4);

const doctorsdata = [...dentistData, ...gynecologistData, ...nutritionistData];
console.log(doctorsdata);

module.exports = doctorsdata;
