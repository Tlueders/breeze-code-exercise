import React from 'react'
import { Button, Header, Modal, Menu } from 'semantic-ui-react'
import CSVReader from "react-csv-reader";

const handleForce = data => {
    console.log(data);
};

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
            <Header>Import your CSV for People or Groups</Header>
            <CSVReader
                onFileLoaded={handleForce}
            />
        </Modal.Description>
        </Modal.Content>
    </Modal>
)

export default ModalModalExample