import React from "react";
import {Accordion} from "../Components";


function RecuiterFAQAccordionAppTwo() {
    return(
        <div className= "App">
            <Accordion
                 title= "How do I find a service and get a quote?"
                 content= "On the homepage, in the search bar that appears at the top of the page, enter the service you are looking for, and click on the Search button. If you are visiting Showskills (i.e., not logged in), you can enter the service in the homepage banner area and click on the Search button."
            />
            <Accordion
                 title= "Tips to submit an effective Buyer Request"
                 content= "Although you have ample room to write what your needs are in the Request, a good rule of thumb is to keep to a couple of paragraphs with specific bullet points. Make sure that you add links and examples to show what you are looking for and to help sellers decide if it is something they can actually do."
            />
            <Accordion
                 title= "Can I share my contact information with the freelancer?"
                 content= "Sharing contact information to communicate off of Showskils is not allowed by our Terms of Service.  This could also cause your Buyer Request to be rejected.  Please do not include any contact information in your Request or attachments."
            />
        </div>
    );
}

export default RecuiterFAQAccordionAppTwo;
