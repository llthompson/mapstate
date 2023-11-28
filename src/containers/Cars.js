import { connect } from 'react-redux'
import Cars from '../components/Cars'
//   default as Cars from '../components/Cars'

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}



export default connect(mapStateToProps)(Cars)