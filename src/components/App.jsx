import eventsData from '../data.json'
import Event from './Event'
export default function App(){
  return(
    <div className="container">
      <h1>Events</h1>
      <div className="events-container">
        {
          eventsData.map((event, idx) => <Event 
                                            key = {idx} 
                                            time = {event.time} 
                                            date = {event.date} 
                                            title = {event.title}
                                            content = {event.content}
                                            selected = {event.selected}
                                            color = {event.color}
                                            />)
        }
      </div>
    </div>
  )
}