
const Container = (props) => {
  return (
    <div className={`w-11/12 md:w-10/12 mx-auto min-h-screen ${props.className}`}>
        { props.children }
    </div>
  )
}

export default Container