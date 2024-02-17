export const getAssetName = (asset) => {
    return process.env.NODE_ENV === "production" ? "." + asset : asset;
};
