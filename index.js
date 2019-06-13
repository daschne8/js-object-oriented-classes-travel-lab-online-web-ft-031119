class Driver{
  constructor(name, start){
    this.name = name
    this.startDate = start
  }
  startDate(){
    return Date(start)
  }
  yearsExperienceFromBeginningOf(year){
    return year - Date.getYear(this.startDate())
  }
}
