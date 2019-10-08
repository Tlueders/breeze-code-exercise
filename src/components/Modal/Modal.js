import React, {Component} from 'react'
import { Button, Header, Modal, Menu } from 'semantic-ui-react'
import CSVReader from "react-csv-reader";
import {determineCsvType} from '../../helpers';

class UploadModal extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }

        this.handleForce = this.handleForce.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleForce(data) {
        this.setState({
            data: data
        });
    }

    handleClick() {
        const type = determineCsvType(this.state.data);
        if(type === 'people') {
            fetch('/api/people', {
                method: 'post',
                body: {
                 "data": this.state.data
                }
            });
        } else if (type === 'groups') {
            fetch('/api/groups', {
                method: 'post',
                body: {
                 "data": this.state.data
                }
            });
        } else {
            console.log('unrecognized CSV type');
        }
    }

    render(){
        return(
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
                        onFileLoaded={this.handleForce}
                    />
                    <Button onClick={this.handleClick} primary style={{marginTop: '1rem'}}>Upload</Button>
                </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }
}

export default UploadModal;