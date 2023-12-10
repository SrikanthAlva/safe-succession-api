import mongoose from 'mongoose'

const successionSchema = new mongoose.Schema(
    {
        creator: {
            type: String,
            required: [true, 'Please add userAddress'],
        },
        executor: {
            type: String,
            required: [true, 'Please add userAddress'],
        },
        willCID: {
            type: String,
            required: [true, 'Please add userAddress'],
        },
        nominees: [
            {
                key: String,
                index: String,
            },
        ],
    },
    {
        timestamps: true,
    }
)

// Update the Schema with the Address of Orderbook and Addresses of Trading Pairs

export const Succession = mongoose.model('succession', successionSchema)
