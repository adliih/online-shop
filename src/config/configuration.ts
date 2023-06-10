export default () => ({
  auth: {
    adminSecret: process.env.AUTH_ADMIN_SECRET,
    jwtSecret: process.env.JWT_SECRET,
  },
});
