import { Context } from './Context'

function ThemedComponent () {
  return (
    <Context.Consumer>
      {(theme) => <div style={{ backgroundColor: theme.background, color: theme.color }}>i am themed component</div>}
    </Context.Consumer>
  )
}

export default ThemedComponent
