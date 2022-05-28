let currentTime = new Date();
// console.log(currentTime)
let hours = currentTime.getHours();
// console.log(`The current hour is: ${hours}`)
let minutes = currentTime.getMinutes();
// console.log(`The current minutes are: ${minutes}`)
let seconds = currentTime.getSeconds();

const amOrPm = () => {
  let am_pm = "AM";

  if (hours >= 12) {
    am_pm = "PM";
    console.log(am_pm);
  }
  let time = `${hours}:${minutes}:${seconds} ${am_pm}`;
  console.log(time);
};

amOrPm();
