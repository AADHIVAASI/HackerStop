export function Challenge(currentChallenge, currentUser) {
  this.id = Math.floor(Math.random() * 100000).toString();
  this.title = currentChallenge.title;
  this.description = currentChallenge.description;
  this.tags = currentChallenge.tags;
  this.createDate = new Date();
  this.empId = currentUser.empId;
  this.likes = "0";
}

export function ResetCurrentChallenge() {
  this.id = "";
  this.title = "";
  this.description = "";
  this.tags = [
    {
      tag: "Feature",
    },
    {
      tag: "Tech",
    },
    {
      tag: "Idea",
    },
  ];
  this.createDate = null;
  this.empId = "";
  this.likes = "";
}
