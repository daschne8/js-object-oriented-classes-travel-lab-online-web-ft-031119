class Driver{
  constructor(name, start){
    this.name = name
    this.start = start
  }
  startDate(){
    return Date(this.start)
  }
  yearsExperienceFromBeginningOf(year){
    return year - Date.getYear(this.startDate())
  }
}
