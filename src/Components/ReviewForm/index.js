import { useEffect, useState } from "react";
import { getFreelancerName } from './DataHandeling';
import './ReviewForm.css';
import { addReview } from './DataHandeling';
import Firebase from 'firebase/app';
import useAuthListener from "../../hooks/use-auth-listener";
import { db } from "../../lib/firebase.prod";

const ReviewForm = (props) => {

    const [FreelancerId, setFid] = useState('');
    const [Recruiterid, setRid] = useState('');
    const [projectid, setpid] = useState('');
    const [FreelancerName, setFname] = useState('');
    const [review, setreview] = useState('');
    const [rating, setrating] = useState(5);
    const [details,setdetails]=useState('');
   
    const currentUser=useAuthListener().user;
    


    const setinfo = async () => {

        setFid(props.freelancerid);
        setRid(props.recruiterid);
        setpid(props.projectid);
        setdetails(props.details);
    

        var name = await getFreelancerName(props.freelancerid);
        setTimeout(() => setFname(name), 200);
    }


    const submitReview = async (e) => {
        e.preventDefault();

        const newEntry = {
            fid: FreelancerId, rid: Recruiterid, pid: projectid,
            rating: rating, review: review
        };
        console.log(newEntry);
        await addReview(newEntry);

      props.updateReview(details,'Yes')
    }





    useEffect(() => {
        setinfo()
    }, [props]);

    console.log(rating, review);

    return (
        <>
            <div className="reviewbody">
                <label className="formHeading89" >Let us know how was {FreelancerName}'s service</label>

                <textarea className='gigInputArea' id='message1'
                    type="text" placeholder="Enter your review here"
                    name="message1"
                    id="message1"

                    autoComplete="off"
                    value={review}
                    onChange={(e) => setreview(e.target.value)}
                ></textarea>
                <br></br>
                <div className='ratings'>
                    <label>How much you like to rate  {FreelancerName} : </label>
                    <label>( Between 1-5 ) <input type='Number' min="1" max="5" onChange={(e) => {
                        setrating(e.target.value)
                    }} /></label>
                </div>
                <br />
                <button className="reviewbtn" onClick={submitReview} >Submit</button>
            </div>

        </>
    )

}

export default ReviewForm;