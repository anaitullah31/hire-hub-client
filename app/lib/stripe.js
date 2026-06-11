import "server-only";

import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


export const PLAN_PRICE_ID = {
    'seeker_pro': 'price_1TghJ3Rq1HzHFuuS4BhWT9Bx',
    'seeker_premium': 'price_1TggZZRq1HzHFuuSQRSPDVnv',
    'recruiter_growth': 'price_1TghJQRq1HzHFuuSdpq2kjuM',
    'recruiter_enterprise': 'price_1TghJgRq1HzHFuuSmJN8s4LP',

}