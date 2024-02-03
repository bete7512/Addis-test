const auth = (req, res, next) => {
    // Addis Test
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  };
  
  export default auth;
  