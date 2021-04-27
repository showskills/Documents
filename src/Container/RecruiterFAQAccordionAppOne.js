import React from "react";
import {Accordion} from "../Components";


function RecuiterFAQAccordionAppOne() {
    return(
        <div className= "App">
            <Accordion
                 title= "Do you accept Bitcoin?"
                 content= "We are currently not accepting Bitcoin, but we are looking forward to add that feature in future."
            />
            <Accordion
                 title= "How do I provide feedback?"
                 content= "You will get a chance to provide feedback after your order is complete."
            />
            <Accordion
                 title= "Can I be both seller and recruiter though the same account?"
                 content= "Yes, we offer the service to become both seller and recruiter though the same account."
            />
        </div>
    );
}

export default RecuiterFAQAccordionAppOne;
