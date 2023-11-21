const defaultState = {
    state: false,
  }

function TFreducerCreator(setTrue, setFalse) {
  return (state = defaultState, action) => {
    switch (action.type) {
      case setTrue:
        return {...state, state: true}
      case setFalse:
        return {...state, state: false}
      default:
        return state
    }
  }
}

export const otlenieFirstReducer = TFreducerCreator("FIRST_OTDELENIE_TRUE", "FIRST_OTDELENIE_FALSE")
export const setFirstOtdelTrue = () => ({type: "FIRST_OTDELENIE_TRUE"})
export const setFirstOtdelFalse = () => ({type: "FIRST_OTDELENIE_FALSE"})

export const otlenieSecondReducer = TFreducerCreator("SECOND_OTDELENIE_TRUE", "SECOND_OTDELENIE_FALSE")
export const setSecondOtdelTrue = () => ({type: "SECOND_OTDELENIE_TRUE"})
export const setSecondOtdelFalse = () => ({type: "SECOND_OTDELENIE_FALSE"})

export const otlenieThirdReducer = TFreducerCreator("THIRD_OTDELENIE_TRUE", "THIRD_OTDELENIE_FALSE")
export const setThirdOtdelTrue = () => ({type: "THIRD_OTDELENIE_TRUE"})
export const setThirdOtdelFalse = () => ({type: "THIRD_OTDELENIE_FALSE"})

export const group108reducer = TFreducerCreator("108_true", "108_false")
export const setGroup108True = () => ({type: "108_true"})
export const setGroup108False = () => ({type: "108_false"})

export const group306reducer = TFreducerCreator("306_true", "306_false")
export const setGroup306True = () => ({type: "306_true"})
export const setGroup306False = () => ({type: "306_false"})

export const group309reducer = TFreducerCreator("309_true", "309_false")
export const setGroup309True = () => ({type: "309_true"})
export const setGroup309False = () => ({type: "309_false"})

export const modalDocsreducer = TFreducerCreator("ModalDocs_true", "ModalDocs_false")
export const setModalDocsTrue = () => ({type: "ModalDocs_true"})
export const setModalDocsFalse = () => ({type: "ModalDocs_false"})

export const abitsReducer = TFreducerCreator("Abits_true", "Abits_false")
export const setAbitsTrue = () => ({type: "Abits_true"})
export const setAbitsFalse = () => ({type: "Abits_false"})

export const teachersReducer = TFreducerCreator("Teachers_true", "Teachers_false")
export const setTeachersTrue = () => ({type: "Teachers_true"})
export const setTeachersFalse = () => ({type: "Teachers_false"})

export const modalGroupsReducer = TFreducerCreator("ModalGroups_true", "ModalGroups_false")
export const setModalGroupsTrue = () => ({type: "ModalGroups_true"})
export const setModalGroupsFalse = () => ({type: "ModalGroups_false"})