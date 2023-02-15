import { ReturnType } from "./types";
export default {
  getBookings: (params?: any): ReturnType => {
    return {
      method: "get",
      url: "/v1/bookings/getMyBookings",
      params: params,
      config: {
        store: {
          action: "set",
          key: "bookings",
        },
      },
    };
  },

  bookingRequest: (data: {
    tenantId: number;
    landlordId: number;
    propertyId: number;
    price: number;
    status: string;
  }): ReturnType => {
    return {
      method: "post",
      url: "/v1/bookings/book",
      data: data,
      config: {
        successMsg:
          "Your booking has been placed successfully. Landlord will contact you shortly.",
        store: {
          action: "set",
          loading: true,
          key: "bookingRequestLoading",
        },
      },
    };
  },

  getBookingById: (id?: number): ReturnType => {
    return {
      method: "get",
      url: `/v1/bookings/getBooking/${id}`,
      config: {
        store: {
          action: "set",
          key: "booking",
        },
      },
    };
  },

  acceptBooking: (id?: number): ReturnType => {
    return {
      method: "post",
      url: `/v1/bookings/accept/${id}`,
      config: {
        successMsg: "Booking has been accepted successfully",
        store: {
          loading: true,
          action: "set",
          key: "acceptBookingLoading",
        },
      },
    };
  },

  cancelBooking: (id?: number): ReturnType => {
    return {
      method: "post",
      url: `/v1/bookings/cancel/${id}`,
      config: {
        successMsg: "Booking has been canceled",
        store: {
          action: "set",
          loading: true,
          key: "cancelBookingLoading",
        },
      },
    };
  },

  declineBooking: (id?: number): ReturnType => {
    return {
      method: "post",
      url: `/v1/bookings/decline/${id}`,
      config: {
        successMsg: "Booking has been declined",
        store: {
          action: "set",
          loading: true,
          key: "declineBookingLoading",
        },
      },
    };
  },

  createSignature: (signature: any, id: number): ReturnType => {
    return {
      method: "post",
      url: `/v1/bookings/createSignatureTest/${id}`,
      data: {
        base64: signature,
      },
      config: {
        successMsg: "Your sign has been successfully saved",
      },
    };
  },

  deposit: (id: number): ReturnType => {
    return {
      method: "post",
      url: `/v1/bookings/depositEscrow/${id}`,
      config: {
        successMsg: "Deposit has been made successfully",
      },
    };
  },
};
