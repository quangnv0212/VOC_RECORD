import Cookies from "js-cookie";

const objCookies = {
  expires: 300,
  domain: process.env.COOKIE_DOMAIN,
};

export const saveToken = (token) => {
  if (token) {
    Cookies.set("voc_token", token, {
      ...objCookies,
    });
  } else {
    Cookies.remove("voc_token", {
      ...objCookies,
      path: "/",
      domain: process.env.COOKIE_DOMAIN,
    });
  }
};

export const getToken = () => {
  const token = Cookies.get("voc_token");
  return token;
};

export const singout = () => {
  const token = Cookies.get("voc_token");
  if (token) {
    Cookies.remove("voc_token", {
      ...objCookies,
      path: "/",
      domain: process.env.COOKIE_DOMAIN,
    });
  } else {
    return;
  }
};
