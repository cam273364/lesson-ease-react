
import React, { useState, useEffect } from 'react';

function Schedule() {

  function isCalendlyEvent(e) {
    return e.origin === "https://calendly.com" && e.data.event && e.data.event.indexOf("calendly.") === 0;
  };
   
  window.addEventListener("message", function(e) {
    if(isCalendlyEvent(e)) {
      console.log(e)
      /* Example to get the name of the event */
      
      console.log("Event name:", e.data.event);
      
      /* Example to get the payload of the event */
      console.log("Event details:", e.data.payload);
    }
  });

  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, [])

  return (
    <div>
      <div>Schedule</div>
      <div class="calendly-inline-widget" data-url="https://calendly.com/cammalone/60-minute-tennis-lesson" style={{minWidth:"320px", height:"700px"}}></div>
    </div>
  )

    

    

}








export default Schedule