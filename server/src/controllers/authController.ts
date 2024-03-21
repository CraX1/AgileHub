import { Users } from "../models/authModel";

export const createUser = async (req: any, res: any) => {
  try {
    const newUser = await Users.create(req.body);

    console.log("req", req.body);
    res.status(200).json({
      status: "success",
      data: {
        tour: `Created user with credentials, ${newUser}`,
      },
    });
  } catch (err) {
    console.log("sasas", err);
  }
};

export const loginUser = (req: any, res: any) => {
  try {
    console.log("req", req.body);
    res.status(200).json({
      status: "success",
      data: {
        tour: "<>Updated tour here if required</>",
      },
    });
  } catch (err) {
    console.log("sasas", err);
  }
};
