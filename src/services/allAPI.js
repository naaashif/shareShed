import commonAPI from "./commonAPI"
import serverURL from "./serverURL"

//register api : called by Auth component when register btn clicked
export const registerAPI = async (userDetails)=>{
   return await commonAPI("POST",`${serverURL}/register`,userDetails)
}

//login api : called by Auth component when login btn clicked
export const loginAPI = async (userDetails)=>{
   return await commonAPI("POST",`${serverURL}/login`,userDetails)
}

//google/sign-in  google login api : called by Auth component when login using google btn clicked
export const googleLoginAPI = async (userDetails)=>{
   return await commonAPI("POST",`${serverURL}/google/sign-in`,userDetails)
}

///user/book/add - addbook api : called by SellBook Compoenent when add book btn click
export const addBookAPI = async (reqBody,reqHeader)=>{
   return await commonAPI("POST",`${serverURL}/user/book/add`,reqBody,reqHeader)
}

//books/home :homepage books api : called by home compoenet when page loads
export const getHomePageBooksAPI = async ()=>{
   return await commonAPI("GET",`${serverURL}/books/home`,{})
}

///books/all : bookpage api : called by books compoenent when page loads - authorised user
export const getAllBooksPageAPI = async (reqHeader,searchKey)=>{
   return await commonAPI("GET",`${serverURL}/books/all?search=${searchKey}`,{},reqHeader)
}

//user-books/all : CALLED By bookstatus when page load- authorised user
export const getAllUserBooksAPI = async (reqHeader)=>{
   return await commonAPI("GET",`${serverURL}/user-books/all`,{},reqHeader)
}

//user-books/bought : get reqst called by purchase component when it loads
export const getAllUserBoughtBooksAPI = async (reqHeader)=>{
   return await commonAPI("GET",`${serverURL}/user-books/bought`,{},reqHeader)
}

///books/:id/view : get request by View when page loads
export const viewBookAPI = async (reqHeader,id)=>{
   return await commonAPI("GET",`${serverURL}/books/${id}/view`,{},reqHeader)
}
//user/:id/edit : put request by Edit when update btn click
export const editUserAPI = async (id,reqBody,reqHeader)=>{
   return await commonAPI("PUT",`${serverURL}/user/${id}/edit`,reqBody,reqHeader)
}

// Tool APIs
export const addToolAPI = async (reqBody) => {
   return await commonAPI("POST", `${serverURL}/tools`, reqBody)
}

export const getProviderToolsAPI = async (providerId) => {
   return await commonAPI("GET", `${serverURL}/provider/tools/${providerId}`, {})
}

export const updateToolAPI = async (id, reqBody) => {
   return await commonAPI("PUT", `${serverURL}/tools/${id}`, reqBody)
}

export const deleteToolAPI = async (id) => {
   return await commonAPI("DELETE", `${serverURL}/tools/${id}`, {})
}

// Booking APIs
export const addBookingAPI = async (reqBody) => {
   return await commonAPI("POST", `${serverURL}/bookings`, reqBody)
}

export const getProviderBookingsAPI = async (providerId) => {
   return await commonAPI("GET", `${serverURL}/provider/bookings/${providerId}`, {})
}