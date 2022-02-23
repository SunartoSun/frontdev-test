import React from 'react'
import Modal from 'react-modal/lib/components/Modal';
import { AUTH_TOKEN, BASE_URL } from '../../App';

const customStyles = {
    content: {
      // top: '50%',
      // left: '50%',
      // right: 'auto',
      // bottom: 'auto',
      // marginRight: '-50%',
      // transform: 'translate(-50%, -50%)',
      maxWidth: '500px',
      margin: '1.75rem auto',
      position: 'relative',
      width: 'auto',
    },
  };

const EmployeeModal = ({show, handleClick, modalType, employee}) => {
  // type 0=create
  // type 1=update

  const fetchApiCreateEmployee = (data) => {
    fetch(`${BASE_URL}/users`, {
      method: 'POST',
      body: data,
      headers: { 
        'Authorization': `Bearer ${AUTH_TOKEN}`,
      }
    }).then(res=>res.json())
    .then(data=> {
      if(Array.isArray(data.data))
        alert(`${data.data[0].field} ${data.data[0].message}`)
      else {
        alert(`${data.data?.name} have been added!`)
        handleClick(true)
      }
    })
    .catch(error => console.error(error))
  }

  const fetchApiUpdateEmployee = (data) => {
    fetch(`${BASE_URL}/users/${employee.id}`, {
      method: 'PUT',
      body: data,
      headers: { 
        'Authorization': `Bearer ${AUTH_TOKEN}`,
      }
    }).then(res=>res.json())
    .then(data=> {
      if(Array.isArray(data.data))
        alert(`${data.data[0].field} ${data.data[0].message}`)
      else {
        alert(`${data.data?.name} have been updated!`)
        handleClick(true)
      }
    })
    .catch(error => console.error(error))
  }

  const fetchApiDeleteEmployee = (data) => {
    fetch(`${BASE_URL}/users/${employee.id}`, {
      method: 'DELETE',
      headers: { 
        'Authorization': `Bearer ${AUTH_TOKEN}`,
      }
    }).then(()=>{alert(`${employee.name} have been deleted!`); handleClick(true)})
    .catch(error => console.error(error))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    if(modalType === 0) {
      fetchApiCreateEmployee(data)
    } else {
      fetchApiUpdateEmployee(data)
    }
  }

  return (
    <Modal
        isOpen={show}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>{modalType === 0 ? "Add Employee" : "Edit Employee"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" name='name' placeholder="Enter employee name" defaultValue={modalType ? employee.name : ""}/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" name='email' placeholder="Enter employee email" defaultValue={modalType ? employee.email : ""}/>
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select className="form-control" id="gender" name='gender' defaultValue={modalType ? employee.gender : "male"}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select className="form-control" id="status" name='status' defaultValue={modalType ? employee.status : "active"}>
              <option value="active">Active</option>
              <option value="inactive">InActive</option>
            </select>
          </div>

          <div className='text-right'>
            <button type="button" className="btn btn-secondary mr-2" onClick={handleClick}>Close</button>
            {
              modalType === 0 ? 
                <button type="submit" className="btn btn-primary">Submit</button>
                :
                <>
                  <button type="submit" className="btn btn-primary mr-2">Edit</button>
                  <button type="button" className="btn btn-danger" onClick={fetchApiDeleteEmployee}>Delete</button>
                </>
            }
          </div>
        </form>
      </Modal>
  )
}

export default EmployeeModal