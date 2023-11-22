import React, {useState} from 'react'
import { Modal} from 'reactstrap'
import calendar from '../../../asset/photo/calendar.png'

export const SecondSection = ({code, doctors, setDoctors}) => {
    const logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgysBj9ZjCCzjcGgecribBtKpD0jD3scEMoQ&usqp=CAU"
    const [modal, setModal] = useState(false)
    const [stories, setStories] = useState();
    // const profile = randomProfile.generate();
    // console.log(profile);
    

    

    const bookingAppointment = (id, name) =>{
        // window.alert("Your appointment with "+id+ " is booked");
        const tempDoct = doctors.map((doctor, key)=>{
            if(doctor.id !== id){
                return doctor;
            }
            else {
                return{
                    ...doctor,
                    isAppointment: true
                }
            }
        })
        setDoctors(tempDoct);
        window.alert("Your appointment with "+name+" is booked. He/She will call you today");
    }
    
  return (
    <>{ modal?
    <Modal
        size="lg"
        isOpen={modal}
        appElement={document.getElementById('root')}
        className='px-3 py-3'
      >
        <button
            onClick={()=>setModal(false)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Close
          </button>
          <br/>
          <div className='font-bold'>
            {stories.length} top stories are:
            </div>
            {stories.map((story, key)=>{
                return(
                    <div className='shadow my-2 hover:bg-gray-100'>
                        {story}
                        <hr/>
                    </div>
                )
            })}
          
        
      </Modal>:
    <div>
        {doctors.map((doctor, key)=>{

            if(doctor.speciality===code){
            return(
            <>
            <div className='flex py-3'>
                <img className='rounded-full px-3' src={logo} style={{height:'100px'}} alt='doctor'/>
                <div className='px-1 w-96'>
                    <p className='text-blue-500 text-lg'>Dr. {doctor.name}</p>
                    <p className='text-sm text-gray-500'>{doctor.speciality}{<br/>} {doctor.experience} years experience overall</p>
                    <p className='text-sm text-gray-500 pt-2'><span className='font-bold text-black'>{doctor.address}</span> {doctor.hospital}</p>
                    <p className='text-sm'>Rs. {doctor.fees} Consultation fee at clinic</p>
                    {<hr/>}
                    <p className='text-xs pt-4'><span className='bg-green-600 text-white py-1 px-1'>👍{doctor.rating}%</span> <span className='font-bold underline pl-2 cursor-pointer' onClick={()=>{setStories(doctor.stories); setModal(true)}}>{doctor.stories.length} Patient Stories</span></p>
                </div>
                <div className='px-5 mx-10'>
                <p className='text-sm text-green-500 font-bold flex'> <img src={calendar} className='h-5 pr-2' alt='calendar'/> Available Today {<br/>}</p>
                    {doctor.isAppointment?
                    <button className='px-5 text-sm bg-green-500 text-white cursor-not-allowed'>Already booked {<br/>} <span className='text-xs'>Doctor will call you</span></button>
                    :
                    <button className='px-5 text-sm bg-blue-500 text-white' onClick={()=>{bookingAppointment(doctor.id, doctor.name)}}>Book appointment {<br/>} <span className='text-xs'>No booking fees</span></button>
                    }
                </div>
            </div>
            {<hr/>}
            </>
            )}
            else return false;
        })}
    </div>}
    </>
  )
}
