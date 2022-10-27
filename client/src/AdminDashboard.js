import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

function AdminDashboard({ user }) {
  return (
    <div>
      <h1>Welcome {user?.name}</h1>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Red Flags</th>
          <th>Name of Reporter</th>
          <th>Location</th>
          <th>Image of incident</th>
          <th>Video of incident</th>
          <th>Status</th>
          <th>Record actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Jane Doe</td>
          <td>Nairobi</td>
          <td>Image URL</td>
          <td>Video URL</td>
          <td>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Under Investigation
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Under Investigation</Dropdown.Item>
              <Dropdown.Item>Rejected</Dropdown.Item>
              <Dropdown.Item>Resolved</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </td>
          <td><Button variant="danger">Delete</Button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>John Doe</td>
          <td>Nakuru</td>
          <td>Image URL</td>
          <td>Video URL</td>
          <td>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Under Investigation
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Under Investigation</Dropdown.Item>
              <Dropdown.Item>Rejected</Dropdown.Item>
              <Dropdown.Item>Resolved</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </td>
          <td><Button variant="danger">Delete</Button></td>
        </tr>
        <tr>
          <td>3</td>
          <td>John Doe</td>
          <td>Nakuru</td>
          <td>Image URL</td>
          <td>Video URL</td>
          <td>    <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Under Investigation
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Under Investigation</Dropdown.Item>
              <Dropdown.Item>Rejected</Dropdown.Item>
              <Dropdown.Item>Resolved</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown></td>
          <td><Button variant="danger">Delete</Button></td>
        </tr>
        <tr>
          <td>4</td>
          <td>Jane Doe</td>
          <td>Nairobi</td>
          <td>Image URL</td>
          <td>Video URL</td>
          <td>
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Under Investigation
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Under Investigation</Dropdown.Item>
              <Dropdown.Item>Rejected</Dropdown.Item>
              <Dropdown.Item>Resolved</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </td>
          <td><Button variant="danger">Delete</Button></td>
        </tr> 
      </tbody>
    </Table>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Interventions</th>
          <th>Name of Reporter</th>
          <th>Location</th>
          <th>Image of incident</th>
          <th>Video of incident</th>
          <th>Status</th>
          <th>Record actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>1</td>
          <td>Jane Doe</td>
          <td>Nairobi</td>
          <td>Image URL</td>
          <td>Video URL</td>
          <td>    
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Under Investigation
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Under Investigation</Dropdown.Item>
              <Dropdown.Item>Rejected</Dropdown.Item>
              <Dropdown.Item>Resolved</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </td>
          <td><Button variant="danger">Delete</Button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>John Doe</td>
          <td>Mombasa</td>
          <td>Image URL</td>
          <td>Video URL</td>
          <td>    
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Under Investigation
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Under Investigation</Dropdown.Item>
              <Dropdown.Item>Rejected</Dropdown.Item>
              <Dropdown.Item>Resolved</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown></td>
          <td><Button variant="danger">Delete</Button></td>
        </tr>
        <tr>
          <td>3</td>
          <td>John Doe</td>
          <td>Mombasa</td>
          <td>Image URL</td>
          <td>Video URL</td>
          <td>    
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Under Investigation
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Under Investigation</Dropdown.Item>
              <Dropdown.Item>Rejected</Dropdown.Item>
              <Dropdown.Item>Resolved</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </td>
          <td><Button variant="danger">Delete</Button></td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default AdminDashboard