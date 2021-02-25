import React, { useState } from 'react'
import { Modal, FormControl, TextField } from '@material-ui/core'

const MyModal = ({modalOpen, modalClose, handleSubmit}) => {

  const [food, setFood] = useState('no')
  const [calories, setCalories] = useState(0)

  const goSubmit = (e) => {
    e.preventDefault()
    handleSubmit({food: food, calories: calories})
  }

  return (
    <Modal
        open={modalOpen}
        onClose={modalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="form-container_modal">
          <form className="modal-form" onSubmit={goSubmit}>
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
      </Modal>
  )
}

export default MyModal