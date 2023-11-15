const axios = require("axios");

module.exports = {
  async afterCreate(event) {
    // Connected to "Save" button in admin panel
    const { result } = event;
    console.log("trigger here result", result);
    try {
      const response = await axios.post(
        "https://connect.mailerlite.com/api/subscribers",
        {
          email: result.email,
          fields: {
            name: result.first_name + " " + result.last_name,
            last_name: result.last_name,
            company: result.cafe_name,
            phone: result.phone,
            first_name: result.first_name,
          },
          groups: ["98370701210159093"],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.MAILERLITE_API}`,
          },
        }
      );
      if (response.status === 201) {
        console.log("Subscriber added to Mailerlite");
      }
    } catch (err) {
      console.log(err);
    }
  },
};
