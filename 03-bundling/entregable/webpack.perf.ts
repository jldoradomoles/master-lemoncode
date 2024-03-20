import { merge } from "webpack-merge";
import prod from "./webpack.prod";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export default merge(prod, {
    plugins: [new BundleAnalyzerPlugin()],
});
