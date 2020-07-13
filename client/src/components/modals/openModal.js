import { TOGGLE_MODAL_ON } from '../../reducers/types'

export const openModal = (dispatch, modalName) => dispatch({type: TOGGLE_MODAL_ON, payload: modalName});