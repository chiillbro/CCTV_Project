import { apiSlice } from "./apiSlice.js";
import { DEVICE_URL } from "../constants.js";

export const deviceApiSlice = apiSlice.injectEndpoints({
  endpoints:(builder)=>({
    addDevice:builder.mutation({
      query:(data)=>({
        url:`${DEVICE_URL}/add-device`,
        method: "POST",
        body: data
      })
    }),
    getAllDevices:builder.query({
      query:()=>({
        url:DEVICE_URL,
        method: "GET",
      })
    })
  })
})

export const {
  useAddDeviceMutation,
  useGetAllDevicesQuery
} = deviceApiSlice