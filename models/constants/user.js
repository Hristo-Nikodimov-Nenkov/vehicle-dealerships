export const username = {
   allowedRegex: /^[a-zA-Z0-9.\-_]+$/,
   minLength: 4,
   maxLength: 40,
};

export const password = {
   minLength: 8,
   maxLength: 40,
};

export const userRoles = {
   client: "Client",
   dealer: "Dealer",
   support: "Support",
   admin: "Admin",
};

export const roles = Object.values(userRoles);

export default {
   username,
   password,
   roles,
};
