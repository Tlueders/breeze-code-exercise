import React from 'react'
import { Button, Header, Modal, Menu } from 'semantic-ui-react'

const ModalModalExample = () => (
    <Modal trigger={
        <Menu.Item
            name='upload'
            >
            Upload CSV
        </Menu.Item>
    }>
        <Modal.Header>Upload a CSV</Modal.Header>
        <Modal.Content>
        <Modal.Description>
            <Header>Import your People or Groups</Header>
        </Modal.Description>
        </Modal.Content>
    </Modal>
)

export default ModalModalExample