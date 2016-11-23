import React from 'react'
import { Pager, Table, Button, Modal, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import moment from 'moment'

class HomeView extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      showModal: false,
      events: [{
        name: 'feed',
        value: 'Хранене'
      }, {
        name: 'shit',
        value: 'Изсра се'
      }, {
        name: 'sleep',
        value: 'Заспа'
      }],
      currentEvent: {
        name: 'shit',
        hour: moment(new Date()).format('YYYY-MM-DDTHH:mm')
      }
    }

    this.handleEventChange = this.handleEventChange.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  closeModal () {
    this.setState({
      showModal: false
    })
  }
  handleDateChange (e) {
    console.log(e.target.value)
    this.setState({
      currentEvent: {
        hour: moment(e.target.value).format('YYYY-MM-DDTHH:mm')
      }
    })
  }

  handleEventChange (e) {
    this.setState({
      currentEvent: {
        name: e.target.value
      }
    })
  }

  openModal () {
    this.setState({
      showModal: true
    })
  }

  render () {
    return (
      <div>
        <Pager>
          <Pager.Item previous href='#'>&larr; Previous</Pager.Item>
          <Pager.Item href='#'>24/10/2016</Pager.Item>
          <Pager.Item disabled next href='#'>Next &rarr;</Pager.Item>
        </Pager>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Час</th>
              <th>Събитие</th>
              <th>Тип</th>
              <th>Времетраене</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>13:25 am</td>
              <td>Смяна памперс</td>
              <td>Много наакан</td>
              <td />
            </tr>
            <tr>
              <td>13:25 pm</td>
              <td>Кърмене</td>
              <td> Лява гърда </td>
              <td>50 minutes</td>
            </tr>
          </tbody>
        </Table>
        <Button bsStyle='primary' bsSize='large' block onClick={this.openModal}>Add Event</Button>
        <Modal show={this.state.showModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup controlId='formControlsSelect'>
                <ControlLabel>Събитие</ControlLabel>
                <FormControl
                  componentClass='select'
                  placeholder='select'
                  value={this.state.currentEvent.name}
                  onChange={this.handleEventChange}>
                  {this.state.events.map(event => {
                    return <option key={event.name} value={event.name}>{event.value}</option>
                  })}
                </FormControl>
              </FormGroup>
              <FormGroup controlId='formControlsInput'>
                <ControlLabel>Час</ControlLabel>
                <FormControl
                  componentClass='input'
                  placeholder='select'
                  value={this.state.currentEvent.hour}
                  onChange={this.handleDateChange} type='datetime-local' />
              </FormGroup>
              <FormGroup controlId='formControlsInput'>
                <ControlLabel>Времетраене (в минути)</ControlLabel>
                <FormControl componentClass='input' placeholder='select' type='number' min='0' />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default HomeView
