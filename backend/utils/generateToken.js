import jwt from "jsonwebtoken";

const generateToken = (userId, res) => {
  try {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
      expiresIn: "10h",
    });

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      maxAge: 10 * 60 * 60 * 1000,
      sameSite: "strict",
    });

    return token;
  } catch (error) {
    return res.status(500).json({ message: "Error in generating token" });
  }
};

export default generateToken;
