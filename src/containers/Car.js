import { connect } from 'react-redux'
import Car from '../components/Car'
//   default as Cars from '../components/Cars'

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}



export default connect(mapStateToProps)(Car)