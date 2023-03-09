import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'

function FormComponent({ addElement, data, isEditing, name, cost, setCost, setName }) {

    const handleclick = (e) => {
        e.preventDefault()
        if (!name || !cost) {
            alert("please enter details")
        } else {
            addElement({ name, cost })
            setCost(0)
            setName('')
        }
    }
    return (
        <Container style={{ position: 'fixed', bottom: '0', left: 0, right: 0, marginBottom: '20px' }}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Food Name:</Form.Label>
                    <Form.Control type="text" onChange={(e) => setName(e.target.value)} value={name} />
                    <Form.Label>Cost:</Form.Label>
                    <Form.Control type="number" onChange={(e) => setCost(e.target.value)} value={cost} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleclick}>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default FormComponent