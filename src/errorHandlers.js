export const notFoundErrorHandler = (err, req, res, next) => {
    if (err.status === 404) {
      res.status(404).send(err.message || "Error not found!")
    } else {
      next(err) // I need to pass the error to the next error middleware
    }
  }
export const unauthrizedHandler = (err, req, res, next) => {
    if (err.status === 401) {
      res.status(401).send(err.message || "you are not logged in!")
    } else {
      next(err) 
    }
  }
  
  export const badRequestErrorHandler = (err, req, res, next) => {
    if (err.status === 400 || err.name === "ValidationError") {
      res.status(400).send(err.errors)
    } else {
      next(err)
    }
  }
  
  export const catchAllErrorHandler = (err, req, res, next) => {
    console.log(err)
    res.status(500).send("Generic Server Error")
  }