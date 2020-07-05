module.exports = {
    plugins: [
      require("postcss-preset-env")({
        autoprefixer: { grid: true },
        stage: 0,
        browsers: "last 2 versions"
      }),
      require("postcss-font-magician")({
        variants: {
        "Playfair Display": {
            "300": [],
            "400": [],
            "700": [],
            "900": []
          },
          "Roboto": {
            "300": []
          }
        },
        foundries: ["google"]
      }),
      require("rfs")(),
      require("cssnano")()
    ]
  };
