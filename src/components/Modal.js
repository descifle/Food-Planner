import React, { useState } from 'react'
import { Modal, FormControl, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';

const MyModal = ({modalOpen, modalClose, handleSubmit, action, foods}) => {

  const [food, setFood] = useState('')
  const [calories, setCalories] = useState(0)

  const goSubmit = (e) => {
    e.preventDefault()
    handleSubmit({food: food, calories: calories})
  }

  const handleModalClose = () => {
    modalClose(action)
  }

  const handleRemove = (id) => {
    handleSubmit(id)
  }
 
  const renderFoods = () => {
    return foods.map((food) => {

      if(food.id !== 'no-id') {
        return (
          // <div key={food.id} className="food-item">
          //   <span> {food.title}</span>
          //   <span>{food.calories}</span>
          //   <button onClick={() => handleRemove(food.id)}>X</button>
          // </div>
            <TableRow key={food.id}>
                <TableCell component="th" scope="row">
                  {food.title}
                </TableCell>
                <TableCell align="right">{food.calories}</TableCell>
                <TableCell align="right">created at</TableCell>
                <TableCell align="right">updated at</TableCell>
                {action === 'remove-food' ? <TableCell align="right"><DeleteIcon onClick={() => handleRemove(food)} /></TableCell> : null}
              </TableRow>
        )
      } else {
        return null
      }
    })
  }

  const renderModalBody = () => {
    if(action === 'view-food' || action === 'remove-food') {
      return (
        <div className="form-container_modal">
          {/* <div>total Calories : {foods[0].allCalories}</div> */}
          <Paper>total Calories : {foods[0].allCalories}</Paper>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Your Foods</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Created At</TableCell>
                  <TableCell align="right">Updated At</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {renderFoods()}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )
    } else {
      return (
        <div className="form-container_modal">
          <form className="modal-form" onSubmit={goSubmit}>
          <h1>{action}</h1>
                  <FormControl className="account-form_control">
                    <TextField 
                    id="username"
                    className="create-input"
                    label="Food" 
                    variant="outlined"
                    value={food}
                    onChange={(e) => {setFood(e.target.value)}}
                    helperText={'add some food'}
                     />
                    <TextField 
                    className="create-input"
                    id="outlined-basic" 
                    label="Calories"
                    type="number"
                    variant="outlined"
                    value={calories}
                    onChange={(e) => setCalories(e.target.value)}
                    helperText={'add some calories'}
                     />
                </FormControl>
                <button>Submit</button>
          </form>
        </div>
      )
    }
  }

  return (
    <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {renderModalBody()}
      </Modal>
  )
}

export default MyModal