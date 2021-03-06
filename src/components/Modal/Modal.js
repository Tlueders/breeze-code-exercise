import React, {Component} from 'react'
import { Button, Header, Modal, Menu, Message } from 'semantic-ui-react'
import CSVReader from "react-csv-reader";
import {determineCsvType, parseCsv} from '../../helpers';

class UploadModal extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
            success: false,
        }

        this.handleForce = this.handleForce.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.resetSuccess = this.resetSuccess.bind(this);
    }

    resetSuccess() {
        this.setState({
            success: false
        })
        window.location.reload();
    }

    handleForce(data) {
        this.setState({
            data: data
        });
    }

    handleClick() {
        const type = determineCsvType(this.state.data);
        const data = parseCsv(this.state.data, type);
        
        if(type === 'people') {
            fetch('http://localhost:8000/api/people', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: data
            })
            .then(res => {
                if(res.status === 201){
                    this.setState({
                        success: true
                    })
                }
            });
        } else if (type === 'groups') {
            fetch('http://localhost:8000/api/groups', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: data
            })
            .then(res => {
                if(res.status === 201){
                    this.setState({
                        success: true
                    })
                }
            });
        } else {
            console.log('unrecognized CSV type');
        }
    }

    render(){

        const MessageExamplePositive = () => {
            if(this.state.success === true) {
                return (
                    <Message positive>
                    <Message.Header>Success</Message.Header>
                    <p>
                        Your CSV was successfully imported.
                    </p>
                    </Message>
                );
            }
        };

        const renderModalContent = () => {
            if(this.state.success !== true) {
                return (
                    <>
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
                    </>
                );
            } else {
                return (
                    <>
                        <Modal.Header>Import Successful</Modal.Header>
                        <Modal.Content>
                        <Modal.Description>
                            <Header>Refresh content</Header>
                            {MessageExamplePositive()}
                            <Button onClick={this.resetSuccess} primary style={{marginTop: '1rem'}}>Refresh</Button>
                        </Modal.Description>
                        </Modal.Content>
                    </>
                );
            }
        }

        return(
            <Modal closeIcon open={this.state.open} trigger={
                <Menu.Item
                    name='upload'
                    >
                    Upload CSV
                </Menu.Item>
            }>
                {renderModalContent()}
            </Modal>
        );
    }
}

export default UploadModal;