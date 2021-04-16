function superbowlWin(answer) {
  let winYear = answer.find((win) => win.result === "W");
  if (winYear) {
    return winYear.year;
  } else {
    return undefined;
  }
}
