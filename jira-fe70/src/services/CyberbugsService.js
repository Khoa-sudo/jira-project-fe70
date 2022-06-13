const { default: axios } = require("axios");
const { DOMAIN_CYBERBUG } = require("../util/constants/settingSystem");

export const cyberbugsService = {
  signinCyberBugs: (userLogin) => {
    return axios({
      url: `${DOMAIN_CYBERBUG}/users/signin`,
      method: "POST",
      data: userLogin,
    });
  },
};
