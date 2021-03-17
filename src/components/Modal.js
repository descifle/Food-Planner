import React, { useState } from 'react'
import { Modal, FormControl, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core'
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import DeleteIcon from '@material-ui/icons/Delete';

const MyModal = ({modalOpen, modalClose, handleSubmit, action, foods}) => {

  const [food, setFood] = useState('')
  const [calories, setCalories] = useState(0)

  const goSubmit = (e) => {
    e.preventDefault()
    handleSubmit({food: food, calories: calories})
    setFood('')
    setCalories(0)
    modalClose(action)
  }

  const handleModalClose = () => {
    setFood('')
    setCalories(0)
    modalClose(action)
  }

  const handleUpdate = (id) => {
    // onclick from modal, in typical submit format have the view foods view and allow it to be update somehow?
    handleSubmit(id)
  }

  const handleRemove = (id) => {
    handleSubmit(id)
    modalClose(action)
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
                <TableCell align="right">created</TableCell>
                {
                  action === 'update-food' ? <TableCell align="right"><AddToPhotosIcon onClick={() => handleUpdate(food)} /></TableCell> :
                  <TableCell align="right">updated</TableCell>
                }
                {action === 'remove-food' ? 
                <TableCell align="right"><Button onClick={() => handleRemove(food)}>Remove<DeleteIcon /></Button></TableCell> : 
                null
                }
              </TableRow>
        )
      } else {
        return null
      }
    })
  }

  const renderModalBody = () => {
    if(action !== 'add-food') {
      return (
        <div className="form-container_modal">
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Your Foods</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Created</TableCell>
                  {
                    action === "update-food" ? <TableCell align="right">update</TableCell> :
                    <TableCell align="right">Updated</TableCell>
                  }
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
                    id="calories" 
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