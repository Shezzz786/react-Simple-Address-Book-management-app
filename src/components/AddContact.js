import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
 

function AddContact(props) {
    
    const navigate=useNavigate();
    const [User, setUser] = useState({name:"", mobile:0});
    
    let add = (e) => {
        e.preventDefault();
        if(User.name === "" || User.mobile === 0){
            alert("All fields are mandatory!!!");
            return
        }

        props.addContactHandler(User);

        setUser({name:"", mobile:0});
    
        navigate('/');
    }
    
    return (
        <div className='ui main'>
            <h2>Add Contact</h2>
            <form className='ui form' onSubmit={add}>
                <div className='field'>
                    <label>Name</label>
                    <input type="text" name="Name" placeholder='Name' value={User.name} onChange={e => setUser({...User, name: e.target.value})} />
                </div>
                <div className='field'>
                    <label>Mobile Number</label>
                    <input type="tel" name="Mobile"    className="input"     required pattern="[0-9]{10}"         placeholder='Add number' value={User.mobile} onChange={e => setUser({...User, mobile: e.target.value})}/>
                </div>
                <button className='ui secondary button'>Add New </button>
            </form>
        </div>
    )
}

export default AddContact
