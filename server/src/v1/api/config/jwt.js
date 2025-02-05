import jwt from "jsonwebtoken";

export const generateToken = (id) => {
  return jwt.sign(id , process.env.JWT_SECRET, { expiresIn: "7d" });
};

export const verifyToken = (token) => {
  try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      return decoded;
  } catch (error) {
      console.log(error);
      return null;
  }
}

