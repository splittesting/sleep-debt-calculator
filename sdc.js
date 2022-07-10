const getSleepHours = day => {

    if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday') {
      return 7; 
    } else if (day === 'wednesday') {
      return 4;
    } else if (day === 'thursday') {
      return 5;
    } else if (day === 'friday') {
      return 6;
    } else if (day === 'saturday') {
      return 8;
    } else if (day === 'sunday') {
      return 8;
    } else {
      return 'invalid entry';
    }
  };
  
  
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'); {
  
   };
  
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
   };
   
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if ( actualSleepHours === idealSleepHours) {
      console.log(`You got the perfect amount of sleep!`);
    } else if ( actualSleepHours > idealSleepHours) {
     console.log(`You got` + ` ` + (actualSleepHours - idealSleepHours) + `hour(s) more sleep than you needed this week. You slept too much.`);
    } else if ( actualSleepHours < idealSleepHours) {
      console.log(`You got` + ` ` + (idealSleepHours - actualSleepHours) + `hour(s) less sleep than you needed this week. Get some rest.`);
    } else {
      console.log('Invalid entry');
    };
  };
  
  
  calculateSleepDebt('monday'); //replace monday with the day of your choice in lower case.
  