import React, {useState} from 'react'
import {Link,useLocation} from'react-router-dom';
import {useNavigate} from 'react-router-dom';

function EditContact(props) {
    
    const navigate = useNavigate();
    let location = useLocation();
    const {id, name, mobile} = location.state.contact;
    const [User, setUser] = useState({id,name,mobile});

    
    
    
    let update = (e) => {
        e.preventDefault();
        if(User.name === "" || User.mobile === 0){
            alert("All fields are mandatory!!!");
            return
        }
       
        props.updateContactHandler(User);
       
        setUser({name:"", mobile: ""});
    
        navigate('/');
    }
    
    return (
        <div className='ui main'>
            <h2>Edit Contact</h2>
            <form className='ui form' onSubmit={update}>
                <div className='field'>
                    <label>Name</label>
                    <input type="text" name="Name" placeholder='Name' value={User.name} onChange={e => setUser({...User, name: e.target.value})}/>
                </div>
                <div className='field'>
                    <label>Mobile Number</label>
                    <input type="tel" name="Mobile"    pattern="[0-9]{10}"         placeholder='Update number' value={User.mobile} onChange={e => setUser({...User, mobile: e.target.value})}/>
                </div>
                <button className='ui orange button'>Update Contect</button>
            </form>
        </div>
    )
}

export default EditContact
