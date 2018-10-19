const robotFactory = (model, mobile) => {
  return {
    model : model,
		mobile: mobile,
		beep () {
      console.log('Beep Boop');
    }
	};
};

const tinCan = robotFactory('P-500', true);
tinCan.beep();


// With factory functions, we dont have to create a new object literal by hand everytime we need a new object. We can simply plug in the needed
// parameters to the function, and repeat every time we need a new object. This makes creating a multitude of similar objects very efficient.
