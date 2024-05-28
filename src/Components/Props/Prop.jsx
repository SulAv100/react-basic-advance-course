import PropTypes from 'prop-types'

function Prop({name,age}) {
    // must take props as parameter ifwe need to use this shit
  return (
    <>
        <span>Hello this is {name}</span>
        <span>This is default props {name}</span>
        <span>I am {age} years old</span>
    </>
)
}

Prop.propTypes ={
    name : PropTypes.string.isRequired,
    age : PropTypes.number.isRequired
}
export default Prop