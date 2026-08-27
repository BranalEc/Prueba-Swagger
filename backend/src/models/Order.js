import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
    {
        orderNumber: {
            type: String,
            required: true,
            unique: true,
        },
        customer: {
            fullName: { type: String, required: true },
            email: { type: String, required: true },
            phone: { type: String, required: true },
            address: { type: String, required: true },
            reference: { type: String },
            additionalInstructions: { type: String },
            location: {
                lat: { type: Number },
                lng: { type: Number },
                geocodedAddress: { type: String },
                mapScreenshot: { type: String } // Base64 or file path
            }
        },
        subtotal: {
            type: Number,
            required: true,
        },
        shippingCost: {
            type: Number,
            required: true,
            default: 0,
        },
        total: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
            default: 'pending',
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        deliveryMethod: {
            type: String,
            enum: ['delivery', 'pickup', 'pos'],
            default: 'delivery',
        },
        pickupDetails: {
            date: { type: String },
            time: { type: String },
        },
    },
    {
        timestamps: true,
    }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
