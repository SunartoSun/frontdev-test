import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../App'
import EmployeeModal from './EmployeeModal'
import Pagination from 'rc-pagination'
import 'rc-pagination/assets/index.css';

const Employee = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSizes, setPageSizes] = useState(0);
  const [totalData, setTotalData] = useState(0);
  const [employeeList, setEmployeeList] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState(0)
  const [employee, setEmployee] = useState(0)

  useEffect(() => {
    fetchApiReadEmployee()
  }, [currentPage])

  const fetchApiReadEmployee = () => {
    fetch(`${BASE_URL}/users?page=${currentPage}`)
      .then(response=>response.json())
      .then(data=> {
        setEmployeeList(data.data)
        setPageSizes(data.meta.pagination.limit)
        setTotalData(data.meta.pagination.total)
      })  
      .catch(error => console.log('Error Read', error))
  }

  const handleModal = (type, item) => {
    setShowModal(!showModal)
    setModalType(type)
    if(type === 1) setEmployee(item)
  }

  const handleClickModal = (refresh=false) => {
    setShowModal(!showModal)
    if(refresh) fetchApiReadEmployee()
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }
  
  return (
    <div className='py-4'>
      <div className='d-flex justify-content-between pb-4'>
        <h1 className='text-center'>Employee List</h1>        
        <button type="button" className="btn btn-primary" onClick={()=>handleModal(0)}>Add Employee</button>
      </div>
      
      <table className="table table-hover">
          <thead>
              <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Email</th>
                  <th>Status</th>
              </tr>
          </thead>
          <tbody>
          {employeeList.length ?
              employeeList.map((employee, index) => (
                <tr key={employee.id} className="cursor-pointer" onClick={()=>handleModal(1,employee)}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.gender}</td>
                  <td>{employee.email}</td>
                  <td>{employee.status}</td>
                </tr>
              ))
            : null}
          </tbody>
      </table>

      <Pagination
        className="text-right"
        onChange={handlePageChange}
        current={currentPage}
        total={totalData}
        pageSize={pageSizes}
        showTotal={(total, range) =>
          `${range[0]} - ${range[1]} of ${total} items`
        }
      />

      <EmployeeModal show={showModal} handleClick={handleClickModal} modalType={modalType} employee={employee}/>
    </div>
  )
}

export default Employee