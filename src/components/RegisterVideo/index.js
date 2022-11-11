import { StyledRegisterVideo } from './styles'
import React from 'react'

// Custom Hook
function useForm(props) {
  const [values, setValues] = React.useState(props.initialValues)

  return {
    values,
    handleChange: (e) => {
      const value = e.target.value
      const field = e.target.name
      setValues({ ...values, [field]: value })
    },
    clearForm() {
      setValues({})
    },
  }
}

export default function RegisterVideo() {
  const [formVisible, setFormVisible] = React.useState(false)
  const formRegistration = useForm({ initialValues: { title: '', url: '' } })

  return (
    <StyledRegisterVideo>
      <button
        className="add-video"
        type="button"
        onClick={() => setFormVisible(true)}
      >
        +
      </button>
      {formVisible && (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setFormVisible(false)
            formRegistration.clearForm()
          }}
        >
          <div>
            <button
              className="close-modal"
              onClick={() => setFormVisible(false)}
            >
              X
            </button>
            <input
              placeholder="Título do Vídeo"
              name="title"
              value={formRegistration.values.title}
              onChange={formRegistration.handleChange}
            ></input>
            <input
              placeholder="URL"
              name="url"
              value={formRegistration.values.url}
              onChange={formRegistration.handleChange}
            ></input>
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      )}
    </StyledRegisterVideo>
  )
}
