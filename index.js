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
