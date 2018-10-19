const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic') {
      let lightWaves = 'Northern Lights';
    console.log(lightWaves);
      }
  console.log(lightWaves);
};

logVisibleLightWaves();

// Good scoping makes code more legible, understandable, easier to maintain as well as saving memory. If a variable does not need to exist
// outside of a block, it shouldn't.
