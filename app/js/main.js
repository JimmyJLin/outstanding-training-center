$(() => {
  console.log('script file loaded');

  $('#est_earnings').on('touchmove', () => {
    const tuitionValue = document.getElementById('tuition');

    const costValue = document.getElementById('cost');

    const weeklyValue = document.getElementById('weekly');

    const annualValue = document.getElementById('annual');

    const start = 0;
    const tutionEnd = 1800;
    const costEnd = 500;
    const weeklyEnd = 2500;
    const annualEnd = 130000;

    const duration = 500; // In milliseconds (divide by 1000 to get seconds).
    const framerate = 5;    // In milliseconds (divide by 1000 to get seconds).

    // toAddTuition
    const toAddTuition = ((tutionEnd - start) * framerate) / duration;

    const tuitionInterval = setInterval(() => {
      const currentValue = parseFloat(tuitionValue.innerHTML);

      if (currentValue >= tutionEnd) {
        clearInterval(tuitionInterval);
        return;
      }
      tuitionValue.innerHTML = (!isNaN(currentValue) === true ? currentValue + toAddTuition : toAddTuition);
    }, framerate);

    // toAddCost
    const toAddCost = ((costEnd - start) * framerate) / duration;

    const costInterval = setInterval(() => {
      const currentValue = parseFloat(costValue.innerHTML);

      if (currentValue >= costEnd) {
        clearInterval(tuitionInterval);
        return;
      }
      costValue.innerHTML = (!isNaN(currentValue) === true ? currentValue + toAddCost : toAddCost);
    }, framerate);

    // toAddWeekly
    const toAddWeekly = ((weeklyEnd - start) * framerate) / duration;

    const weeklyInterval = setInterval(() => {
      const currentValue = parseFloat(weeklyValue.innerHTML);

      if (currentValue >= weeklyEnd) {
        clearInterval(tuitionInterval);
        return;
      }
      weeklyValue.innerHTML = (!isNaN(currentValue) === true ? currentValue + toAddWeekly : toAddWeekly);
    }, framerate);

    // toAddAnnual
    const toAddAnnual = ((annualEnd - start) * framerate) / duration;

    const annualInterval = setInterval(() => {
      const currentValue = parseFloat(annualValue.innerHTML);

      if (currentValue >= annualEnd) {
        clearInterval(tuitionInterval);
        return;
      }
      annualValue.innerHTML = (!isNaN(currentValue) === true ? currentValue + toAddAnnual : toAddAnnual);
    }, framerate);
  });

  // onhover load interval counting up
  $('#est_earnings').hover(() => {

    const tuitionValue = document.getElementById('tuition');

    const costValue = document.getElementById('cost');

    const weeklyValue = document.getElementById('weekly');

    const annualValue = document.getElementById('annual');

    const start = 0;
    const tutionEnd = 1800;
    const costEnd = 500;
    const weeklyEnd = 2500;
    const annualEnd = 130000;

    const duration = 500; // In milliseconds (divide by 1000 to get seconds).
    const framerate = 5;    // In milliseconds (divide by 1000 to get seconds).

    // toAddTuition
    const toAddTuition = ((tutionEnd - start) * framerate) / duration;

    const tuitionInterval = setInterval(() => {
      const currentValue = parseFloat(tuitionValue.innerHTML);

      if (currentValue >= tutionEnd) {
        clearInterval(tuitionInterval);
        return;
      }
      tuitionValue.innerHTML = (!isNaN(currentValue) === true ? currentValue + toAddTuition : toAddTuition);
    }, framerate);

    // toAddCost
    const toAddCost = ((costEnd - start) * framerate) / duration;

    const costInterval = setInterval(() => {
      const currentValue = parseFloat(costValue.innerHTML);

      if (currentValue >= costEnd) {
        clearInterval(tuitionInterval);
        return;
      }
      costValue.innerHTML = (!isNaN(currentValue) === true ? currentValue + toAddCost : toAddCost);
    }, framerate);

    // toAddWeekly
    const toAddWeekly = ((weeklyEnd - start) * framerate) / duration;

    const weeklyInterval = setInterval(() => {
      const currentValue = parseFloat(weeklyValue.innerHTML);

      if (currentValue >= weeklyEnd) {
        clearInterval(tuitionInterval);
        return;
      }
      weeklyValue.innerHTML = (!isNaN(currentValue) === true ? currentValue + toAddWeekly : toAddWeekly);
    }, framerate);

    // toAddAnnual
    const toAddAnnual = ((annualEnd - start) * framerate) / duration;

    const annualInterval = setInterval(() => {
      const currentValue = parseFloat(annualValue.innerHTML);

      if (currentValue >= annualEnd) {
        clearInterval(tuitionInterval);
        return;
      }
      annualValue.innerHTML = (!isNaN(currentValue) === true ? currentValue + toAddAnnual : toAddAnnual);
    }, framerate);
  });
});
