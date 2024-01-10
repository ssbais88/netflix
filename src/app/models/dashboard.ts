import mongoose, { Schema, model } from "mongoose";

const DashboardSchema = new Schema(
  {
    header: { type: String, required: true },
    subHeader: { type: String, required: true },
    paragraph: { type: String, required: true },
    tvModule: {
      header: { type: String, requried: true },
      subHeader: { type: String, required: true },
      videoLink: { type: String, required: true },
    },
    offlineModule: {
      header: { type: String, requried: true },
      subHeader: { type: String, required: true },
      videoLink: { type: String, required: true },
    },
  },
  { timestamps: true }
);

const Dashboard =
  mongoose.models.Dashboard || model("Dashboard", DashboardSchema);
export default Dashboard;
