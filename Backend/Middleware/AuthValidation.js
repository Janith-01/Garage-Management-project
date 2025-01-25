export const signupValidation = (req, res, next) => {
    const { name, email, password } = req.body;
  
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required", success: false });
    }
    next();
  };
  
  export const loginValidation = (req, res, next) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required", success: false });
    }
    next();
  };
  

