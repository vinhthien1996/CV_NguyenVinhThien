const stateDefault = {
    info: "NVT"
}

export const InfoReducer = (state = stateDefault, action) => {

    switch (action.type) {
        
        default: {
            return { ...state }
        }
    }
}