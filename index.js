const userInfo = document.querySelector(".user_info");
const frontEndMentor = document.querySelector(".front_end_mentor");
const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");
const reportTimeTracks = document.querySelectorAll(".report_duration_track");

userInfo.addEventListener("mouseover", () => {
  frontEndMentor.classList.add("show_front_end_mentor_icon");
  frontEndMentor.style.transition = ".8s ease";
  userInfo.style.filter = "blur(2px)";
  userInfo.style.transition = ".5s ease";
});

userInfo.addEventListener("mouseout", () => {
  frontEndMentor.classList.remove("show_front_end_mentor_icon");
  frontEndMentor.style.transition = ".8s ease";
  userInfo.style.filter = "blur(0)";
  userInfo.style.transition = ".5s ease";
});

daily.addEventListener("click", getDailyInfo);
weekly.addEventListener("click", getWeeklyInfo);
monthly.addEventListener("click", getMonthlyInfo);

// Get daily info using FETCH API
function getDailyInfo() {
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      reportTimeTracks.forEach((timeTrack, index) => {
        timeTrack.querySelector(
          ".current"
        ).innerHTML = `${data[index].timeframes.daily.current}hrs`;
        timeTrack.querySelector(
          ".previous"
        ).innerHTML = `Few days ago - ${data[index].timeframes.daily.previous}hrs`;
      });
    });
}

// Get weekly info using FETCH API
function getWeeklyInfo() {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        reportTimeTracks.forEach((timeTrack, index) => {
          timeTrack.querySelector(
            ".current"
          ).innerHTML = `${data[index].timeframes.weekly.current}hrs`;
          timeTrack.querySelector(
            ".previous"
          ).innerHTML = `Last week - ${data[index].timeframes.weekly.previous}hrs`;
        });
      });
  }

  // Get monthly info using FETCH API
  function getMonthlyInfo() {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        reportTimeTracks.forEach((timeTrack, index) => {
          timeTrack.querySelector(
            ".current"
          ).innerHTML = `${data[index].timeframes.monthly.current}hrs`;
          timeTrack.querySelector(
            ".previous"
          ).innerHTML = `Last month - ${data[index].timeframes.monthly.previous}hrs`;
        });
      });
  }

  // Automatically parse in monthly data fecthed on load
  window.addEventListener('load', getMonthlyInfo);
