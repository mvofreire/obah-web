const isProd = process.env.NODE_ENV === "production";

export default {
  userSessionKey: "obah-web-session-key",
  baseUrl: isProd
    ? "http://obahapi-env.kpz2ejwur2.us-east-1.elasticbeanstalk.com"
    : "http://localhost:5000"
};
