import React, { useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import ModalComponent from './ModalComponent'

function Tables({ data, deleteElement, editElement }) {
    const [show, setShow] = useState(false)

    const handleView = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }
    return (
        <>

            {data?.length &&
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Food Name</th>
                            <th>Food Cost</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>{
                        data?.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.cost}</td>
                                <td>
                                    <ModalComponent show={show} item={item} handleClose={handleClose} />
                                    <Button variant='info' onClick={() => editElement(index)}>Edit</Button>{' '}
                                    <Button variant='danger' onClick={() => deleteElement(index)}>Delete</Button>{' '}
                                    <Button variant='success' onClick={handleView}>view</Button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>}
        </>
    )
}

export default Tables