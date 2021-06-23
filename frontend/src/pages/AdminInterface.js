import React, { Fragment } from 'react';

class AdminInterface extends React.Component {
    render() {
        return (
            <>
<table>
      <tr className="top-heading">
        <th>Select a page</th>
        <th colspan="3" className="top-heading">Page Management</th>
      </tr>

      <tr>
        <td className="heading">Home</td>
        <td><a href="Add.html">Add</a></td>
        <td><a href="Edit.html">Edit</a></td>
        <td><a href="Delete.html">Delete</a></td>
      </tr>

      <tr>
        <td>About</td>
        <td><a href="Add.html">Add</a></td>
        <td><a href="Edit.html">Edit</a></td>
        <td><a href="Delete.html">Delete</a></td>
      </tr>

      <tr>
        <td>Personal Resume</td>
        <td><a href="Add.html">Add</a></td>
        <td><a href="Edit.html">Edit</a></td>
        <td><a href="Delete.html">Delete</a></td>
      </tr>

      <tr>
        <td>Portfolio</td>
        <td><a href="Add.html">Add</a></td>
        <td><a href="Edit.html">Edit</a></td>
        <td><a href="Delete.html">Delete</a></td>
      </tr>

      <tr>
        <td>Contact</td>
        <td><a href="Add.html">Add</a></td>
        <td><a href="Edit.html">Edit</a></td>
        <td><a href="Delete.html">Delete</a></td>
      </tr>

    </table>

</>
        )
    }
}

export default AdminInterface;