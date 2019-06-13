class Driver{
  constructor(name, start){
    this.name = name
    this.start = start
  }
  startDate(){
    return new Date(this.start)
  }
  yearsExperienceFromBeginningOf(year){
    return year - this.startDate().getFullYear()
  }
}

class Route{
  constructor(beginingLocation,endingLocation){
    this.beginingLocation = beginingLocation
    this.endingLocation = endingLocation
  }
  blocksTravelled(){
    let eastWest = ['1st Avenue','2nd Avenue','3rd Avenue','Lexington Avenue','Park','Madison Avenue','5th Avenue'];
    let blocksTravelled = 0

  }
}
