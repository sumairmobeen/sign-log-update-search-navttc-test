import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ListGroup, Row, Col, Button } from "react-bootstrap";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllPosts } from "../../store/apis";
import DeleteModal from "../subComponents/DeleteModal";
import { useHistory } from 'react-router-dom'
import Editable from "../Tables/Editable";

function Users() {
  const [state, setstate] = useState([]);
  const [cols, setcols] = useState([
    { title: 'Name', field: 'name' },
    { title: 'Email', field: 'email' }
  ])
  const history = useHistory();

  const dispatch = useDispatch()

  const [msg, setmsg] = useState('')

  const handleDelete = (id) => {
    console.log(id)
    axios.delete('http://localhost:5000/api/users/' + id)
      .then((res) => {

        console.log(res.data);

       

        setmsg(`${id} Deleted Successfully`);
        history.push('/users')

      })
      .catch((e) => console.log(e));


  }
  useEffect(() => {
    async function fetchUsers() {
      const users = await axios.get('http://localhost:5000/api/users')
      console.log(users.data.data);
      setstate(users.data.data)

    }
    fetchUsers()
  }, []);

  return (
    <Editable rows={state} cols={cols} type='users' />
  );
}
export default Users;

