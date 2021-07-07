import {
    REMOVEBOUNDINGBOX, UPDATEBOUNDINGBOX,
    HANDLEMOUSEUP, HANDLERESIZE
} from '../action/actionConstant'

const state = []
for (let a = 0; a < 50; a++) {
    state.push([])
}
const BoundingBoxCollection = (state = Array.from(Array(50), () => []), { type, payload }) => {
    let NewState = [...state];
    switch (type) {
        case HANDLERESIZE:
            console.log("Handling resize")
            return NewState
        case REMOVEBOUNDINGBOX:
            NewState[payload.currentFrameIndex].splice(payload.currentBoundingBoxIndex, 1)
            return NewState
        case UPDATEBOUNDINGBOX:
            NewState[payload.currentFrameIndex].splice(payload.currentBoundingBoxIndex, 1, {
                x: payload.x,
                y: payload.y,
                drawX: payload.drawX,
                drawY: payload.drawY,
                width: payload.width,
                height: payload.height,
                category: payload.category,
            })
            return NewState
        case HANDLEMOUSEUP:
            NewState[payload.currentFrameIndex][payload.currentBoundingBoxIndex] = {
                x: payload.x,
                y: payload.y,
                width: payload.width,
                height: payload.height,
                BoudingBox: payload.BoudingBox,
                category: payload.category,
                drawX: payload.drawX,
                drawY: payload.drawY
            }
            return NewState
        default:
    }
    return state
}
export default BoundingBoxCollection
