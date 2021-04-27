import {db} from '../../lib/firebase.prod';

const UpdateData= async (props)=>{
     const {sender,recipient,projectid} =props;
    var ref=db.collection('messages').doc(recipient);
    await ref.get().then(async (doc)=>{
        var messagesarray=doc.data().Messages;
        messagesarray.map((message,i)=>{
            if ((message.FromUID === sender) && (message.ProjectId === projectid))
                {
                    message.Response ='Accepted';
                }
        });
        await ref.update({Messages:messagesarray})
    })
}

const DeleteData=async(props)=>{
    const {sender,recipient,projectid} =props;
    var messagesarray;
    var ref=db.collection('messages').doc(recipient);
    await ref.get().then(async (doc)=>{
     messagesarray=doc.data().Messages;
        var idx;
        messagesarray.map((message,i)=>{
            if ((message.FromUID === sender) && (message.ProjectId === projectid))
                { idx=i;                
                }
        });
        messagesarray.splice(idx,1);
        await ref.update({Messages:messagesarray})
    })
    return messagesarray;
}



export {UpdateData,DeleteData};