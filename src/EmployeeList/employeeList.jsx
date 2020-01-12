import React from 'react';
import { connect } from 'react-redux';

// functional component for listing employee list
const employeeList = ({user}) =>  (
            <div className="container App text-center">
            <h4><u>Employee List</u></h4>
            <div className=" container table table-responsive">
              <table className="table-bordered pt-5">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>phoneNo</th>
                        </tr>
                    </thead>
                    <tbody>
          {user.map((data, index) => {
            return (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.gender}</td>
                <td>{data.email}</td>
                <td>{data.phoneNo}</td>
              </tr>
            );
          })}
        </tbody>
                </table>
            </div>
        </div>
        );

// getting the state from the store

function mapState(state) {
    return state;
}
// connect store to get prasent state
export default connect(mapState)(employeeList);