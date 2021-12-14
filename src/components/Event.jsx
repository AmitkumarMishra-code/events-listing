export default function Event({time, date, title, content, selected, color}){
  return(
    <div className={selected ? "individual-event selected" :"individual-event"}>
      
      <div className="schedule" style={{backgroundColor: color}}>
        <p>{date}</p>
        <p>{time}</p>
      </div>

      <div className="content">
        <p>{title}</p>
        <p>{content}</p>
      </div>

      <div className="calendar">
        <button className={selected ? "active button":"button"}>+ Add to Calendar</button>
      </div>

    </div>
  )
}